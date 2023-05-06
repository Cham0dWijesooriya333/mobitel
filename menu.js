import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


const Menu = () =>
{
    return (
    
        <div style={{marginTop:'1%' , marginRight:'-116%'}}>
            <Navbar collapseOnSelect expand="lg" bg="green" >
                <Container>

                    <Navbar.Brand href="#home">SLT-MOBITEL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="https://mobitel.lk/about-us">About</Nav.Link>
                            <Nav.Link href="https://mobitel.lk/support">Support</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="https://www.mobitel.lk/contact-us">Contact Us</Nav.Link>
                        </Nav>
                        &nbsp; &nbsp;
                        <NavDropdown title="Regional Sites" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="https://www.mobitel.lk/anuradhapura-branch">Anuradhapura</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.mobitel.lk/jaffna-branch">Jaffna</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.mobitel.lk/city/polonnaruwa">Polonnaruwa</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>

            </Navbar>

            <p style={{width:"220%", marginLeft:"1.5%", marginTop:"-2.28%"}}>
    <a href="https://mobitel.lk/?index=true" > 
    <img id="image1" position= 'relative' width={275} height={100} src="./img/mobi.jpg"/> </a> 
            </p>
        
        </div>
 
       
        
           )
}

export default Menu;