import {Layout} from "../components/Layout";
import React, {useEffect, useState} from "react";
import PostItem from "../components/PostItem";
import Loader from "../components/Loader";

const Posts = ({posts: serverPosts}) => {

  const [posts, setPosts] = useState(serverPosts ? Object.entries(serverPosts).reverse() : serverPosts);
  const [visible, setVisible] = useState(10);

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts.json`);
      const json = await response.json();
      setPosts(Object.entries(json).reverse());
    }
    if(!serverPosts){
      load();
    }
  }, []);


  if(!posts) return <Loader/>;

  return (
    <Layout title='Posts'>
      <div className="posts__list">
        <h1>List of articles</h1>
        <div className="posts__items">
          {posts.slice(0, visible).map((item, key) =>
            <PostItem item={item} key={key}/>
          )}
        </div>
        {visible < posts.length &&
          <button onClick={() => setVisible(visible + 10)}>Load more</button>
        }
      </div>
    </Layout>
  )
};

Posts.getInitialProps = async (ctx) => {
  if(!ctx.req) return {posts: null};
  const res = await fetch(`${process.env.API_URL}/posts.json`);
  const json = await res.json();
  return {posts: json}
};

export default Posts;