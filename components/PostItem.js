import React from 'react'
import Link from "next/link";

const PostItem = props => {
  return (
    <div className='posts__item fade-in'>
      <div className="posts__img" style={{backgroundImage: `url(${props.item[1].featuredImage.replace(/ /g, '%20')})`}}>
        <Link href={`/post/${props.item[0]}`}><a/></Link>
      </div>
      <div className="posts__wrap">
        <div className="posts__info">
          <p className='cat'><Link href={`/category/${props.item[1].category}`}><a>{props.item[1].category}</a></Link></p>
          <p className='time'>{props.item[1].timeToRead} min read</p>
        </div>
        <h4><Link href={`/post/${props.item[0]}`}><a>{props.item[1].title}</a></Link></h4>
        <div className="posts__info">
          <p><Link href={`/user/${props.item[1].author.id}`}><a>{props.item[1].author.name}</a></Link></p>
          <time>{new Date(props.item[1].date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}</time>
          <span>{props.item[1].comments ? `${Object.entries(props.item[1].comments).length} Replies` : 'No Reply'}</span>
        </div>
        <p>{props.item.image}</p>
        <div className='posts__description'
           dangerouslySetInnerHTML={{__html: props.item[1].value._cache.html.length > 150 ? `${props.item[1].value._cache.html.slice(0, 150)}...` : props.item[1].value._cache.html}}/>
        <button
          className='button'
        >
          <Link href={`/post/${props.item[0]}`}><a>Read More</a></Link>
        </button>
      </div>
    </div>
  )
};

export default PostItem