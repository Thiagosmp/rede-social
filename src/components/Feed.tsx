import React, { useEffect, useState } from 'react'
import Post from './Post'
import { makeRequest } from '../../axios';

interface IPost {
  id: number;
  post_desc: string;
  img: string;
  userName: string;
  userImg: string;
  created_at: string;
}

const Feed = () => {
  const [posts, setPosts] = useState<IPost[]|undefined>(undefined);

  useEffect(() => {
    makeRequest.get('/post').then((res) => {
      setPosts(res.data.data);
    }).catch((err) => {
      console.error(err);
    });
  },[])

  return (
    <div className='w-full flex flex-col items-center gap-5'>
      {posts?.map((post, id)=>
        <Post post={post} key={id}/>
      )}
    </div>
  )
}

export default Feed