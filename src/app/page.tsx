'use client';
import { useRouter } from "next/navigation";
import { useState , useEffect } from "react";
export default function Home() {

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
      try {
        let data = await fetch("https://dummyjson.com/products");
        data = await data.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function
    fetchData();
  }, []);


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
      <button onClick={()=>router.push("./about/aboutus/")}>goto about b</button>
      <h1></h1>
    </main>
  );
}


