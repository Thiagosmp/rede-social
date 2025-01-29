'use client';

import Feed from '@/components/Feed';
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const value = localStorage.getItem("rede-social:token");
    if (!value) {
     router.push('/login');
    }
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-100">
      <Header />
      <div className='w-full flex justify-start pt-10'>
        <Sidebar />
        <Feed />
      </div>
    </main>
  )
}

export default Home