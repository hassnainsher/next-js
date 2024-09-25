'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const router =useRouter()
  const [name,setname]= useState('hello');
  const click =()=>{
    setname('world');
    alert("hello");
  }
  return (
    <main>
      <h1>sdfh {name}</h1>
      <button onClick={click}>hh</button>
      <button onClick={()=>router.push("./about/aboutus/")}>goto about</button>
      <h1></h1>
    </main>
  );
}


