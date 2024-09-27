

export async function Hello(){
    let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    return data.users;
}

export default async function Page() {
   let users = await Hello();
  return (
    <div>
        <h1 className="font-bold">hello</h1>
       {
          users.map((item)=>(
            <main key={item.id}>
                <h1> <span className="text-red-600 font-bold">hello: </span>  {item.firstName}</h1>
            </main>
          ))
        }

    </div>
  )
}