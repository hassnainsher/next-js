"use client";
import React, { useState,useEffect } from 'react';

export default function Products() {
  const [product,setProduct]=useState([])
  useEffect(()=>{
    const fetchData = async()=>{
       let data = await fetch("https://dummyjson.com/products");
    data = await data.json()
    // console.log(data.products);
    setProduct(data.products);
  };
    fetchData();
   
  },[])
  return (
    <div
    //  className='flex items-center justify-center h-screen'
     >
        <h1>hello i am products</h1>
        
    </div>
  )
}
