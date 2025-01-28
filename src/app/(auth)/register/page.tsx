'use client';

import AuthInput from '@/components/AuthInput';
import Button from '@/components/ButtonAuth';
import Modal from '@/components/Modal';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { makeRequest } from '../../../../axios';



const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const router = useRouter(); 

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await makeRequest.post('auth/register', {
        userName,
        email,
        password,
        confirmPassword,
      });
      setSuccessMessage(response.data.msg);
      setError('');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // Tipagem segura para acessar propriedades específicas do AxiosError
        console.error(err.response?.data);
        setError(err.response?.data?.msg || 'Ocorreu um erro desconhecido');
      } else {
        // Erro genérico (não é do Axios)
        setError('Ocorreu um erro inesperado');
      }
      setSuccessMessage('');
    }
  };

  const handleCloseModal = () => {
    setSuccessMessage('');
    router.push('/'); 
  };

  return (
    <>
      <h1 className="font-bold text-2xl">REGISTRAR</h1>
      <AuthInput label="Nome:" newState={setUserName} />
      <AuthInput label="Email:" newState={setEmail} />
      <AuthInput label="Senha:" newState={setPassword} isPassword />
      <AuthInput label="Confirme a senha:" newState={setConfirmPassword} isPassword />
      {error && <span className="text-red-500 text-sm">{error}</span>}
      <Button text="Registrar" onClick={handleRegister} bgColor="bg-green-600" />
      <Link href="/login" className="text-center underline hover:text-blue-700">
        Já possui um cadastro?
      </Link>
      {successMessage && <Modal message={successMessage} onClose={handleCloseModal} />}
    </>
  );
};

export default Register;
