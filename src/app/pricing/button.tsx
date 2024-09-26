"use client";

// import { useRouter } from 'next/router';
import React from 'react'

export default function Button({price}) {
    // const router = useRouter
    console.log('====================================');
    console.log(price);
    console.log('====================================');
  return (
    <div>
        <button className='bg-red-600 text-white rounded mt-3 mb-2 hover:bg-blue-700' onClick={()=>alert(price)}>click me and chack your value</button>
    </div>
  )
}
