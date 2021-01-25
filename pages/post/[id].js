import {Layout} from "../../components/Layout";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const Post = ({post: serverPost}) => {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}.json`);
      const json = await response.json();
      setPost(json);
    }
    if (!serverPost) {
      load()
    }
  }, []);

  if(!post) return <div>loading...</div>;

  return (
    <Layout title={post.title}>
      <div className="post">
        <div className="post__list">
          <div className="posts__info">
            <p className='cat'><Link href={`/category/${post.category}`}><a>{post.category}</a></Link></p>
            <p className='time'>{post.timeToRead} min read</p>
          </div>
          <h1>{post.title}</h1>
          <div className="posts__info post__info">
            <p>{post.author ? <Link href={`/user/${post.author.id}`}><a>{post.author.name}</a></Link> : null}</p>
            <time>{new Date(post.date).toLocaleDateString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})}</time>
            <span>{post.comments ? `${Object.entries(post.comments).length} Replies` : 'No Reply'}</span>
          </div>

          <div className="post__img">
            <img src={post.featuredImage} alt=""/>
          </div>

          {post.value
            ? <div className='post__content' dangerouslySetInnerHTML={{__html: post.value._cache.html}}/>
            : null}
        </div>
      </div>
    </Layout>
  )
};

Post.getInitialProps = async (ctx) => {
  if(!ctx.req) return {post: null};
  const res = await fetch(`${process.env.API_URL}/posts/${ctx.query.id}.json`);
  return {post: await res.json()};
};

// export async function getServerSideProps({ query, req }) {
//   // if (!req) {
//   //   return {post: null}
//   // }
//   const response = await fetch(`${process.env.API_URL}/posts/${query.id}.json`)
//   const post = await response.json()
//
//   return {props: {post}}
// }

export default Post;