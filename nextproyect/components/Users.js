
const Users = (props) =>{
   
return(
    <ul className="list-group">
   {
       props.users.map(user =>(
           <li className="list-group-item d-flex justify-content-between align-items-center" key={user.id}>
               <div>
               <h5>{user.name}</h5>
               <p>Email: {user.email}</p>
               </div>
               <img src={user.avatar} alt={user.name} style={{borderRdius:'50%'}}></img>
           </li>
       ))
       
   }
   </ul>
)
}

export default Users;