import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../global';


export default function Signup() {
  // const success=true;

    const [credentials,setcredentials]=useState({name:"",email:"",password:"",location:""})
    const handlesubmit= async(e)=> {
    

        e.preventDefault();
         console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location}))
            
        const res = await fetch(`${API}/user/usersdetails`,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location})
        });
        const json = await res.json();
        console.log(json);
        if(!json){
          alert('enter the value')
        }
      
 
     
    }
 
  const onChange  =(Event) =>{
    setcredentials({...credentials,[Event.target.name]:Event.target.value})
  }
    
  return (
    <>
  <div className='container'>
    <form onSubmit={handlesubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name}   onChange={onChange} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
    <input type="email" className="form-control" value={credentials.email} onChange={onChange} name='email'/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password'/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
    <input type="text" className="form-control" value={credentials.location} onChange={onChange} name='location' />
  </div>
 
  <button type="submit" className=" m-3 btn btn-success">Submit</button>
  <Link to='/login' className='m-3 btn btn-danger'>already a user</Link>

</form>

</div>
    </>
  )
}








