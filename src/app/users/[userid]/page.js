async function getUser(id){
    let data = await fetch(`http://localhost:3001/api/users/${id}`);
     data= await data.json();
     return data;
}

const UserDetails = async({params}) => {
     const userid= await params
     //console.log(userid.userid)
    let user = await getUser(userid.userid);
     user = user.result;
    return (
        <div>
            <h1>Users Details</h1>
            <h2>{user.id}</h2>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <h2>{user.id}</h2>

        </div>

     )
}
export default UserDetails;