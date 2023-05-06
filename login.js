import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Menu from "./menu";



const Login = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

     const navigate= useNavigate();
        
     
        const handleSumbit =  (event) => {
              event.preventDefault();
              axios.post('http://localhost:8081/login', {email: email, password: password})
                 .then(res =>{
                  if(res.data === "Succesful") {
                     navigate('/home');
                     }   
                     else 
                     alert("Wrong Email or Password");
                            }
                 )
                 .catch(err => console.log(err));
                
                }
            
        

        return (
        
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
          <div className='bg-white p-3 rounded w-25'>
          
           <form onSubmit={handleSumbit}>
    
          <div className='mb-3'>
           <label htmIfor="email"> <strong>Email </strong></label>
           <input type="email" placeholder='Enter Email' name='email' className=' form-control rounded-0' onChange={(event) => {
              setEmail(event.target.value)
            }} />
          </div>
          
          <div className='mb-3'>
            <label htmlfor="password"><strong>Password</strong></label>
            <input type='password' placeholder='Enter Password' name='password' className='form-control rounded-0' onChange={(event) => {
              setPassword(event.target.value)
            }} />
          </div>
    
          <button type='submit' className='btn btn-success w-100 rounded-0'><strong> Log in </strong></button>
          
          <p>You are agree to our terms and policies</p>
          <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none '>Create Account </Link>
          </form>
        </div>
        </div>
      ) 
    }  
        
    

export default Login;
