import Button from "./button";

async function productList(){
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products
}

export default async function Pricing() {
  let products = await productList();
  console.log(products);
  return (
    <div
    //  className='flex justify-center items-center h-screen'
     >
        <h1>hello i am pricing</h1>

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
