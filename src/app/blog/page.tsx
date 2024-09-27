"use client";
import Script from 'next/script'
import React from 'react'

export default function Blog() {
  return (
    <main className='flex justify-center items-center h-screen'>
        <h1>hi Im blog</h1>
        <Script
        src='../../public/loaction.tsx'
        onLoad={()=>{
          console.log('====================================');
          console.log("file is loded");
          console.log('====================================');
        }}
        ></Script>
    </main>
  )
}
