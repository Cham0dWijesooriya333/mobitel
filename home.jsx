import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Container} from 'react-bootstrap';


function Home() {
  /* const [name, setName] = useState('')
  const navigate= useNavigate();

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8081')
    
    .then()(res => {
      if(res.data.valid) {
        setName(res.data.name);
      } else {
        navigate('/')
        console.log(res.session.name)
      }
      console.log(res)
    })
    .catch(err => console.log(err))
 }, [])
*/

  return (
  
<body class="fixed-sn mdb-skin">

<header>

  <div id="slide-out" class="side-nav sn-bg-4 fixed">
    <ul class="custom-scrollbar">
   
     

    </ul>
    <div class="sidenav-bg mask-strong"></div>
  </div>

</header>

<main>

  <div class="container-fluid text-center">

    
    <div class="card card-cascade wider reverse my-4 pb-5">

     
      <div class="view view-cascade overlay wow fadeIn">
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" class="img-fluid"></img>
        <a href="#!">
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
    
     
      <div class="card-body card-body-cascade text-center wow fadeIn" data-wow-delay="0.2s">
       
        <h4 class="card-title"><strong>SLT-MOBITEL Regional Sites Management System</strong></h4>
        
        <p class="card-text">This sites can use for more detail about the broken down base stations and more updates Belongs to SLT-MOBITEL Pvt Ltd.
        </p>

        <a class="btn btn-primary btn-lg">ANURADHAPURA</a>  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <a class="btn btn-secondary btn-lg">JAFFNA</a> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <a class="btn btn-default btn-lg" color='pink'>POLONNARUWA</a>

      </div>
     

    </div>
    

  </div>

</main>

<footer class="page-footer text-center text-md-left pt-4" />

  
    <div class="container-fluid"/> 
    <div class="row"/>

      

  <div class="footer-copyright py-3 text-center">
    <div class="container-fluid">
      © 2023 Copyright: <a href="https://www.slt.lk/en/support"> www.slt.lk.Support  </a>

    </div>
  </div>


<footer/>


</body>



 )   
 
  
}

export default Home;

