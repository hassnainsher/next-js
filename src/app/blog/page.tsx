"use client";
// import Script from 'next/script'
import React from 'react'

export default function Blog() {
  console.log('====================================');
  console.log(process.env);
  console.log('==================================== my enviornmnt variable');
  return (
    <main className=''>
        <h1>hi Im blog</h1>


        {
          process.env.NODE_ENV=="development"?<h1 className='font-bold m-7 text-red-600'>crunt mode is development mode</h1>:
          <h1>crunt mode is production mode</h1>
        }
        {/* <Script
        src='../../public/loaction.tsx'
        onLoad={()=>{
          console.log('====================================');
          console.log("file is loded");
          console.log('====================================');
        }}
        ></Script> */}
    </main>
  )
}
