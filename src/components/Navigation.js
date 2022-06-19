import React, { useState} from 'react';
import {  Button } from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';


 export const Navigation = () => {

  const [redirect, setRedirect] = useState(false);

   const Logout = async () =>{
    const response = await fetch(process.env.REACT_APP_API + 'utilisateurs/logout', {
        method: "POST",
        headers:{'Content-type': 'application/json', 'Accept': 'application/json'},
        credentials: "include"
    })
    console.log(response);
    setRedirect(true);
}
if(redirect){

  return <Redirect to="/" />
}
        return(
            <nav id="nav-wrap">
              
              <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                Show navigation
              </a>
              <a className="mobile-btn" href="#home" title="Hide navigation">
                Hide navigation
              </a>
              
              <ul id="nav" className="nav" style={{justifyContent:'center'}}>
                
                <li className="current">
                    <Link to="/posts">
                        Posts
                    </Link>
                </li>
    
                <li>
                <Link to="/categories">
                        Catégories
                    </Link>
                </li>
    
                <li>
                <Link to="/utilisateurs">
                        Utilisateurs
                    </Link>
                </li>
    
                <li>
                 <a href="https://ibrahimasall.com" target="_blank">
                    Réalisations
                  </a> 
                </li>
    
                <li>
                  <a  href="https://blog.ibrahimasall.com" target="_blank">
                    Blog
                  </a>
                </li>
    
                <li style={{margin:10}}>
                  <Button onClick={Logout}>
                      Logout
                  </Button>
                </li>
              </ul>
              
            </nav>
        )
    }