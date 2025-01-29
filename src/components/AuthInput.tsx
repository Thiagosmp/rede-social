import React from 'react'

interface IAuthInputProps {
  newState: (state:string) => void;
  label: string;
  isPassword?: boolean;
}

const AuthInput = (props:IAuthInputProps) => {
  return (
    <div className='flex flex-col justify-between items-start'>
      <label>{props.label}</label>
      <input type={props.isPassword ? "password" : "text"} className='border-gray-400 border-b w-full focus-visible:border-gray-500 focus-visible:border-b focus-visible:outline-none' onChange={(e) => props.newState(e.currentTarget.value)} />
    </div>
  )
}

export default AuthInput