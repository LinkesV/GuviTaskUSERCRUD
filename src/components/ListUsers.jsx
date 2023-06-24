import React  from "react";
import { data } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import './styles/ListUsers.css'

function ListUsers() {
  const [users,setUsers] = useContext(data);
  

  const deleteHandler = (index)=>{
    let x = [];
     if(users.length === 0){
       setUsers([])
    }
    else{
      x = users.filter((user,x)=>{return x != index})
    }

    x.map((user, index) => {
      user.id = index + 1;
      return null
    });

    
    setUsers(x)
    
  }


  return (
    <div className="tablecontainer">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>View Profile</th>
            <th>Delete</th>
         </tr>
        </thead>
        <tbody >
        {
            users.map((user) => {
                let link = `/user/${user.id}`
                console.log(user)
                return(
                  
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.fname}</td>
                        <td><Link to = {link}><button>View Profile</button></Link></td>
                        <td><button type="submit" onClick={(e)=>{deleteHandler(e.target.value)}} value={user.id - 1}>Delete User</button></td>

                    </tr>
                   
                )
              })
        }
         </tbody>
        
      </table>
    </div>
  );
}

export default ListUsers;
