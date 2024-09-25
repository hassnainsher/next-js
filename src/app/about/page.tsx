"use client";
import { useRouter } from "next/navigation"
export default function About(){
    const router =useRouter();
    return(
        <main className="flex justify-center items-center h-screen">
            <h1>Hello Im about </h1> <br /> <br />
            <button className="bg-red-600 ml-3" onClick={()=>router.push('/about/aboutus/')}> go to my child</button>
        </main>
    )
}