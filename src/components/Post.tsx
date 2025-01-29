import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaThumbsUp, FaRegComment, FaPaperPlane} from 'react-icons/fa';

interface IPost {
  id: number;
  post_desc: string;
  img: string;
  userName: string;
  userImg: string;
  created_at: string;
}

interface IUser {
  userName: string;
  userImg: string;
}

const Post = ( props:{ post:IPost } ) => {
  const { post_desc, img, userName, userImg, created_at } = props.post;
  const [user, setUser] = useState<IUser | undefined>(undefined);
    
  useEffect(() => {
    const value = localStorage.getItem("rede-social:user");
    if (value) {
      setUser(JSON.parse(value));
    }
  }, []);

  const date = new Date(created_at);
  const formatedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + "-" + " " + date.getHours() + ":" + date.getMinutes();

  return (
    <div className='w-1/3 bg-white rounded-lg p-4 shadow-md'>
      <header className='flex gap-2 pb-4 border-b items-center'>
        <Image src={userImg ? userImg : "https://img.freepik.com/free-icon/user_318-159711.jpg"} alt="Icone do Perfil" width={32} height={32} className='rounded-full' />
        <div className='flex flex-col'>
          <span className='font-semibold'>{userName}</span>
          <span className='text-xs'>{formatedDate}</span>
        </div>
      </header>
      {post_desc && 
        <div className='py-4 w-full'>
          <span>{post_desc}</span>
        </div>
      }
      {img &&
        <Image src={img} alt="Imagem do Post" width={800} height={800} className='rounded' />
      }
      <div className='flex justify-between py-4 border-b'>
        <div className='flex gap-2 items-center'>
          <span className='bg-blue-600 w-6 h-6 text-white items-center flex justify-center rounded-full text-xs cursor-pointer'>
            <FaThumbsUp />
          </span>
          3
        </div>
        <span>5 comentários</span>
      </div>
      <div className='flex justify-around py-4 text-gray-600 border-b'>
        <button className='flex items-center gap-2'><FaThumbsUp />Curtir</button>
        <button className='flex items-center gap-2'><FaRegComment />Comentar</button>
      </div>
      <div className='flex gap-4 pt-6'>
        {user?.userImg ? (
          <Image src={user.userImg} alt="Icone do Perfil" width={32} height={32} className='rounded-full' />
        ) : (
          <Image src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="Ícone do Perfil" width={32} height={32} className='rounded-full' />
        )}
        <div className='w-full bg-zinc-100 flex items-center text-gray-600 px-3 py-1 rounded-full'>
          <input type="text" className='bg-zinc-100 w-full outline-none' />
          <FaPaperPlane />
        </div>
      </div>
      
    </div>
  )
}

export default Post