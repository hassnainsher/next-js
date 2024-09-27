import Button from "./button";
import img from "../images/daraz.jpg";
import Image from "next/image";
import { title } from "process";

async function productList(){
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function Pricing() {
  let products = await productList();
  console.log(products);
  return (
    <div
    //  className='flex justify-center items-center h-screen'
     >
        <h1>hello i am pricing</h1>
        <Image
        src={img}
        height={50} alt={""}        />
        {/* sarver images / live images with domains  
        configer your img domain in next.config.mjs file */}
        <Image
        src={"https://st3.depositphotos.com/1008648/32182/i/450/depositphotos_321827342-stock-photo-connection-network-in-servers-data.jpg"}
        height={50}
        width={50} alt={""} />

        {
          products.map((item)=>(
            <main key={item.id}>
              <h1>{item.title}</h1>

              <Button price={item.price}></Button>
            </main>
          ))
        }
    </div>
  )
}

// export function genrateMetadata({params}){
//   return{
//     title:"Pricing Screen"
//   }
// }


export const metadata = {
  title: 'Pricing Screen'
}
export function ClientLayout({ children }) {
  return children
}