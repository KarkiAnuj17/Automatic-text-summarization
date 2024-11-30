import { RegisterForm } from '@/components/register-form'

import React from 'react'

const Register = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-20">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 transform rotate-45 scale-150"></div>
        <div
          className="absolute inset-0 bg-gradient-to-l from-purple-400 to-pink-500 mix-blend-multiply transform -rotate-45 scale-150"></div>
      </div>
      <RegisterForm />
    </div>
  )
}

export default Register


