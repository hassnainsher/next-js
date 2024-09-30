import Image from "next/image";
export async function UserData(){
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}
export default async function Page(){
  const users = await UserData();
return(
  <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-6">
    {
      users.map((item)=>(
        <main key={item.id} >
          <div>
            <Image
            src={item.image}
            width={400}
            height ={100}
            alt="....."/>
            <h1 className="text-center font-bold">{item.firstName}  {item.lastName} {item.maidenName}</h1>
          <p>{item.discription}</p>
          <p>{item.ip}  {item.address.city}</p>
          </div>
          
        </main>
      ))
    }
  </main>
)
}