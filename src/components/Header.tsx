'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import { TbMessageCircle } from "react-icons/tb";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface User {
  userName: string;
  userImg: string;
}

const Header = () => {
  const [user, setUser] = useState<User>({
    userName: '',
    userImg: ''
  });
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const value = localStorage.getItem("rede-social:user");
    if (value) {
      setUser(JSON.parse(value));
    }
    
  }, []);

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    localStorage.removeItem("rede-social:user");
    localStorage.removeItem("rede-social:token");
    router.push('/login');
  };

  return (
    <header className='w-full bg-white flex justify-between py-2 px-4 items-center shadow-md'>
      <Link href='/' className='font-bold text-sky-900 text-lg'>FACEBOOK</Link>
      <div className='flex bg-zinc-100 items-center text-gray-600 px-3 py-1 rounded-full gap-2'>
        <input type="text" placeholder="Pesquisar" className='bg-zinc-100 outline-none' />
        <FaSearch />
      </div>
      <div className='flex gap-4 items-center text-gray-600'>
        <div className='flex gap-2'>
          <button className='bg-zinc-200 p-2 rounded-full hover:bg-zinc-300'>
            <TbMessageCircle />
          </button>
          <button className='bg-zinc-200 p-2 rounded-full hover:bg-zinc-300'>
            <FaBell />
          </button>
        </div>
        <div className='relative'>
          <button className='flex items-center gap-2' onClick={() => setShowMenu(!showMenu)}>
            {user.userImg ? (
              <Image src={user.userImg} alt="Icone do Perfil" width={32} height={32} className='rounded-full' />
            ) : (
              <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
            )}
            <span className='text-gray-600 font-bold'>{user.userName}</span>
          </button>
          {showMenu && (
            <div className='absolute flex flex-col bg-white p-4 shadow-md rounded-md gap-2 border-t whitespace-nowrap right-[-5px]'>
              <Link href='' className='border-b'>Editar Perfil</Link>
              <Link href='' onClick={handleLogout}>Logout</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
