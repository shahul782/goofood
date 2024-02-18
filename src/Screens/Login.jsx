import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../global';

export default function Login() {
  const navigate =useNavigate();
  const [credentials,setcredentials]=useState({email:"",password:""})
  const handlesubmit= async(e)=> {
  

      e.preventDefault();
       console.log(JSON.stringify({email:credentials.email,password:credentials.password}))
          
      const res = await fetch(`${API}/user/loginuser`,{
          method:"POST",
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify({email:credentials.email,password:credentials.password})
      });
      const json = await res.json();
      console.log(json);
      if(!json){
        alert('enter the value')
      }else{
       navigate('/');
      }
    

   
  }

const onChange  =(Event) =>{
  setcredentials({...credentials,[Event.target.name]:Event.target.value})
}
  return (
    <div>
      <div className='container'>
    <form onSubmit={handlesubmit}>
 
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
    <input type="email" className="form-control" value={credentials.email} onChange={onChange} name='email'/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password'/>
  </div>
 
 
  <button type="submit" className=" m-3 btn btn-success">Submit</button>
  <Link to='/signup' className='m-3 btn btn-danger'> i am a new user</Link>

</form>

</div>
      
    </div>
  )
}
