'use client';

import Header from '@/components/Header'
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
    <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-100">
      <Header />
    </main>
  )
}

export default Home