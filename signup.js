import React, {useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Menu from "./menu";


function Signup(){ 

   
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
  
    const handleSumbit = async (event) => {
          event.preventDefault();
          axios.post('http://localhost:8081/signup', {name, email, password})
             .then(res => {
              console.log(res);
              navigate('/')
            })  
      
          .catch(err => console.log(err));
        } 
  
    return (
    
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
      <h2>Sign-Up</h2>
       
       <form onSubmit={handleSumbit}>

      <div className='mb-3'> 
        <label htmlfor="name"><strong>Name</strong></label>
        <input type="text" placeholder='Enter Name' name='name' className='form-control rounded-0' onChange={(event) => {
          setName(event.target.value)
        }} />
      </div> 

      <div className='mb-3'>
       <label htmIfor="email"> <strong>Email </strong></label>
       <input type="email" placeholder='Enter Email' name='email' className=' form-control rounded-0' onChange={(event) => {
          setEmail(event.target.value)
        }} />
      </div>
      
      <div className='mb-3'>
        <label htmlFor="password"><strong>Password</strong></label>
        <input type='password' placeholder='Enter Password' name='password' className='form-control rounded-0' onChange={(event) => {
          setPassword(event.target.value)
        }} />
      </div>
      <a href="https://www.mobitel.lk/privacy-policy#:~:text=Privacy%20Policy%20for%20e%2Dnews,the%20accuracy%20of%20the%20information.">Terms and condition</a>
      <button type='submit' className='btn btn-success w-100 rounded-0'> Sign up </button>
      

      <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none '>Login </Link>
      </form>
    </div>
    </div>
    )
    
    }



export default Signup; 