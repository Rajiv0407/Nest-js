import Link from "next/link";

async function getUserList(){
    let data = await fetch('http://localhost:3000/api/users');
     data= await data.json();
     return data;
}
const Users =async() =>{
     const users = await getUserList();
    return(
        <div>
            <h1>Users List</h1>
            {
                    users.map((item)=>(
                        <div key={item.id}>
                        <h2 >{item.id},{item.name},{item.email}</h2>
                        <Link href={`/users/${item.id}`}>User Details</Link>
                        </div>
                    ))
            }
        </div>
    )
}
export default Users;