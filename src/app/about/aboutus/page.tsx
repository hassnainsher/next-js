"use client";
import { useRouter } from 'next/navigation'
import React from 'react'
export default function Aboutus() {
 const router = useRouter()
  return (
    <div className='flex justify-center items-center h-screen'>
      <h1> hello Im child of about</h1>
      <button className='bg-red-600' onClick={()=>router.push('/')}>go to back</button>
     </div>
  )
}
