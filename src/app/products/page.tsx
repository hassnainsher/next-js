// export async function Data (){
//   let data = await fetch('http://localhost:3000/api/hello');
//   data =await data.json();
//   return data;

// }




// export default async function Products() {
//    const user = await Data()
//    console.log('====================================');
//    console.log(user.name);
//    console.log('====================================');
  
//   return (
//     <div>
//         <h1>hello i am products</h1>
        
//     </div>
//   )
// }



// Fetching data from an API
export async function Data() {
  const response = await fetch('http://localhost:3000/api/hello');
  const data = await response.json();
  console.log("API Response:", data); // Log the API response
  return data;
}


export default async function Products() {
  const user = await Data();

  console.log('====================================');
  console.log(user?.name || (Array.isArray(user) ? user[0]?.name : "Name not found")); // Check both array and object cases
  console.log('====================================');

  return (
    <div>
      <h1>Hello, I am Products</h1>
      {/* Conditionally rendering based on data type */}
      {user?.name && <p>User Name: {user.name}</p>}
      {Array.isArray(user) && user[0]?.name && <p>User Name: {user[0].name}</p>}
    </div>
  );
}
