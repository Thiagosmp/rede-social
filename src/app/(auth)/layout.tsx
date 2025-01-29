import React from 'react'

type IAuthPageProps = {
  children: React.ReactNode
}

const AuthPage = ({children}: IAuthPageProps) => {
  return (
    <main className="bg-[url('https://i.ytimg.com/vi/BJXZP-m01j4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGHIgVChCMA8=&rs=AOn4CLDlj1XfngZ_26rxwBdmQwgZB8US9Q')] bg-no-repeat bg-cover flex min-h-screen flex-col items-center justify-center text-gray-600">
      <form className='flex flex-col w-96 bg-white shadow-xl px-8 py-14 rounded-3xl gap-5'>
        {children}
      </form>
    </main>
  )
}

export default AuthPage