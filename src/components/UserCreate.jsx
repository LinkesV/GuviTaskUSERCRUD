import React from 'react'
import { data } from '../App'
import { useContext } from 'react'
import { useState } from 'react'
import './styles/UserCreate.css'
function UserCreate() {

    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [email,setEmail] = useState('');
    const [src,setSrc] = useState('');
    const [about,setAbout] = useState('');

    const [users,setUsers] = useContext(data)

    const submitHandler = () => {
        let user = {
            fname:fname,
            lname:lname,
            email:email,
            src:src,
            about:about,
            id: users.length + 1,
        }

        setUsers([...users,user])
        
    }

  return (
        <div className='formbody'>

            <h1>User Creation Form</h1>

            <div className="field field_v3">
            <label className="ha-screen-reader" >First name:</label><br></br>
            <input className="field__input" type="text" id="fname" name="fname" onChange={(e)=>{setFname(e.target.value)}}/><br></br>

            <span className="field__label-wrap" aria-hidden="true">
                <span className="field__label">First Name:</span>
            </span>
            </div>

            <div className="field field_v3">
            <label className="ha-screen-reader">Last name:</label><br></br>
            <input  className="field__input" type="text" id="lname" name="lname" onChange={(e)=>{setLname(e.target.value)}}/><br></br>

            <span className="field__label-wrap" aria-hidden="true">
                <span className="field__label">Last Name:</span>
            </span>
            </div> 

            <div className="field field_v3">
            <label className="ha-screen-reader">Email:</label><br></br>
            <input  className="field__input" type="text" id="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/><br></br>

            <span className="field__label-wrap" aria-hidden="true">
                <span className="field__label">Email:</span>
            </span>
            </div>

            <div className="field field_v3">
            <label  className="ha-screen-reader">Profile Picture Link:</label><br></br>
            <input  className="field__input" type="text" id="src" name="src" onChange={(e)=>{setSrc(e.target.value)}}/><br></br>

            <span className="field__label-wrap" aria-hidden="true">
                <span className="field__label">Profile Picture Link:</span>
            </span>
            </div>
            
            <div className="field field_v3">
            <label className="ha-screen-reader">About You:</label><br></br>
            <input  className="field__input" type="text" id="about" name="about" onChange={(e)=>{setAbout(e.target.value)}}/><br></br>

            <span className="field__label-wrap" aria-hidden="true">
                <span className="field__label">About You:</span>
            </span>
            </div>
            

            

            <button className='createbtn'type='submit' onClick={submitHandler}>Create User</button>
        </div>  
        )
}

export default UserCreate