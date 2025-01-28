"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios';
import AuthInput from '@/components/AuthInput';
import Button from '@/components/ButtonAuth';
import { useRouter } from 'next/navigation';
import { makeRequest } from '../../../../axios';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter(); 
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if(!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await makeRequest.post('auth/login', { email, password });
      localStorage.setItem(
        'rede-social:user', 
        JSON.stringify(response.data.data.user)
      );
      localStorage.setItem(
        'rede-social:token', 
        JSON.stringify(response.data.data.token)
      );
      router.push('/');
      setError('');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // Tipagem segura para acessar propriedades específicas do AxiosError
        console.error(err.response?.data);
        setError(err.response?.data?.msg || 'Ocorreu um erro desconhecido');
      } else {
        setError('Ocorreu um erro inesperado');
      }
    }
  };

  return (
    <>
      <h1 className='font-bold text-2xl'>LOGIN</h1>
      <AuthInput label='Email:' newState={setEmail}/>
      <AuthInput label='Senha:' newState={setPassword} isPassword/>
      {error && <span className='text-red-500 text-sm'>{error}</span>}
      <Button text='Entrar' onClick={handleLogin} bgColor='bg-green-600'/>
      <Link href="/register" className='text-center underline hover:text-blue-700'>Registrar-se</Link>
    </>
  )
}

export default Login
