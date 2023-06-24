import React from 'react'
import { data } from "../App";
import { useContext } from "react";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './styles/Profile.css'

function Profile() {
    const [users,] = useContext(data)
    const id = useParams().id
    const user = users[id-1]
    const [updating,setUpdating] = useState(false)
     
    const hiddenToggle = () => {
        setUpdating(true)
    }


    const [fname,setFname] = useState(user.fname);
    const [lname,setLname] = useState(user.lname);
    const [email,setEmail] = useState(user.email);
    const [src,setSrc] = useState(user.src);
    const [about,setAbout] = useState(user.about);

    const updateHandler = () => {

        setUpdating(false);

        user.fname = fname;
        user.lname = lname;
        user.email = email;
        user.src = src;
        user.about = about;

        users.map((item)=>{
            if(item.id === id){
                return user
            }
            else return item
        })

    }

  return (
    <div className='userbody'>
        <div className='profilepic'>
            <img alt='Bad Url Given' className='pic' src={user.src} style={{maxWidth:"10vw"}}/>
        </div>
        <div className='profile'>
            <h1 className='profileheader'>{user.fname}'s Profile</h1> 
            <button type='submit' className={!updating? "btn":"hidden"} onClick={hiddenToggle}>Update Profile</button>
            <div className='userdetails'> 
                <div className='fname'>First Name: {user.fname}</div>
                <div className='lname'>Last Name: {user.lname}</div>
                <div className='email'>Email: {user.email}</div>
                <h3 style={{fontSize:'20px'}}> About You:</h3>
                <div className='about'>{user.about} </div>
            </div>

        </div>

        <div className={updating?"updater":"hidden"}>
         <div className="field field_v3" style={{marginTop:"15px"}}>
            <label className="ha-screen-reader" >First name:</label><br></br>
            <input style={{width:"500px"}}className="field__input" type="text" id="fname" name="fname" defaultValue={user.fname} onChange={(e)=>{setFname(e.target.value)}}/><br></br>
            <span className="field__label-wrap" aria-hidden="true">
                <span className="field__label" style={{fontSize:"15px"}}>First Name:</span>
            </span>
        </div>

            <div className="field field_v3" style={{marginTop:"15px"}}>
            <label className="ha-screen-reader" >Last name:</label><br></br>
            <input className="field__input" type="text" id="lname" name="lname" defaultValue={user.lname} onChange={(e)=>{setLname(e.target.value)}}/><br></br>


            <span className="field__label-wrap" aria-hidden="true">
                <span className="field__label"  style={{fontSize:"15px"}}>Last Name:</span>
            </span>
            </div> 

            <div className="field field_v3" style={{marginTop:"15px"}}>
            <label className="ha-screen-reader" >Email:</label><br></br>
            <input className="field__input" type="text" id="email" name="email" defaultValue={user.email} onChange={(e)=>{setEmail(e.target.value)}}/><br></br>

            <span className="field__label-wrap" aria-hidden="true">
                <span className="field__label"  style={{fontSize:"15px"}}>Email:</span>
            </span>
            </div>

            <div className="field field_v3" style={{marginTop:"15px"}}>
            <label className="ha-screen-reader" >Profile Picture Link:</label><br></br>
            <input className="field__input" type="text" id="fname" name="fname" defaultValue={user.src} onChange={(e)=>{setSrc(e.target.value)}}/><br></br>

            <span className="field__label-wrap" aria-hidden="true">
                <span className="field__label"  style={{fontSize:"15px"}}>Profile Picture Link:</span>
            </span>
            </div>

            <div className="field field_v3" style={{marginTop:"15px",marginBottom:"15px"}}>
            <label className="ha-screen-reader" >About You:</label><br></br>
            <input className="field__input" type="text" id="about" name="about" defaultValue={user.about} onChange={(e)=>{setAbout(e.target.value)}}/><br></br>

            <span className="field__label-wrap" aria-hidden="true">
                <span className="field__label"  style={{fontSize:"15px"}}>About You:</span>
            </span>
            </div>

            

            

            <button className='createbtn' type='submit' onClick={updateHandler}>Update Profile</button>
        </div>  
    </div>
  )
}

export default Profile