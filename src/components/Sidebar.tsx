import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaUserFriends, FaAlignLeft, FaPeopleArrows, FaStore, FaBookmark, FaFlag, FaCalendar } from "react-icons/fa"
import { TbDeviceImac, TbClockHour4} from "react-icons/tb"

interface IUser {
  userName: string;
  userImg: string;
}

const Sidebar = () => {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  
  useEffect(() => {
    const value = localStorage.getItem("rede-social:user");
    if (value) {
      setUser(JSON.parse(value));
    }
  }, []);

  return (
    <aside className='pl-4'>
      <nav className='flex flex-col gap-6 text-gray-600 font-semibold'>
        <Link href="" className='flex gap-2 pb-6 items-center'>
          {user?.userImg ? (
            <Image src={user.userImg} alt="Icone do Perfil" width={32} height={32} className='rounded-full' />
          ) : (
            <Image src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="Ícone do Perfil" width={32} height={32} className='rounded-full' />
          )}
          <span className='text-nowrap'>{user?.userName}</span>
        </Link>
        <Link href="" className='flex gap-3 items-center'>
          <FaUserFriends className='w-6 h-6'/>
          <span>Amigos</span>
        </Link>
        <Link href="" className='flex gap-3 items-center'>
          <FaAlignLeft className='w-6 h-6'/>
          <span>Feed</span>
        </Link>
        <Link href="" className='flex gap-3 items-center'>
          <FaPeopleArrows className='w-6 h-6'/>
          <span>Grupos</span>
        </Link>
        <Link href="" className='flex gap-3 items-center'>
          <FaStore className='w-6 h-6'/>
          <span>Loja</span>
        </Link>
        <Link href="" className='flex gap-3 items-center'>
          <TbDeviceImac className='w-6 h-6'/>
          <span>Assistir</span>
        </Link>
        <Link href="" className='flex gap-3 items-center'>
          <TbClockHour4 className='w-6 h-6'/>
          <span>Lembranças</span>
        </Link>
        <Link href="" className='flex gap-3 items-center'>
          <FaBookmark className='w-6 h-6'/>
          <span>Salvo</span>
        </Link>
        <Link href="" className='flex gap-3 items-center'>
          <FaFlag className='w-6 h-6'/>
          <span>Página</span>
        </Link>
        <Link href="" className='flex gap-3 items-center'>
          <FaCalendar className='w-6 h-6' />
          <span>Eventos</span>
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar