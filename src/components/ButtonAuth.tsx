import React from 'react'

interface ButtonAuthProps {
  text: string;
  onClick?: (e:React.FormEvent) => void;
  bgColor?: string;
}

const ButtonAuth = ({ text, onClick, bgColor }: ButtonAuthProps) => {
  return (
    <button className={`${bgColor} py-3 font-bold text-white rounded-lg hover:opacity-90 mt-5`} onClick={onClick}>{text}</button>
  )
}

export default ButtonAuth