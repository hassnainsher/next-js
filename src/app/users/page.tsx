import Link from "next/link";
import getUsers from "../../../services/getUsers"
export default async function page() {
    const getUserList =  getUsers()
    const users = await getUserList;
    console.log('====================================');
    console.log(users);
    console.log('==================================== data');
  return (
    <div>
        {
            users.map((item)=>(
                <main key={item.id}>
                    
                    <Link href={`/users/${item.id}`}>{item.name}</Link>
                </main>
            ))
        }
    </div>
  )
}