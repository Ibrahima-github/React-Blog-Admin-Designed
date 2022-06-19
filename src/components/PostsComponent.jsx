import React, {useEffect, useState}  from "react";
import { Redirect, Route } from 'react-router-dom'


const PostsComponents = ({ component: Component, ...rest }) =>  {
    const [redirect, setRedirect] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(async () => {
    const userRequestResponse = await fetch(process.env.REACT_APP_API + 'utilisateurs/user', {
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
      credentials:"include",
    });
    
    console.log(userRequestResponse);
    
     const userRequestContent = await userRequestResponse.json();
     console.log(userRequestContent);
     console.log(userRequestContent.message);
     
        if(userRequestContent.message === 'Authenticated'){
         
          setIsLoggedIn(true);
        }else{
          setRedirect(true);
        }
  })
 /*  const auth = async () => {

    
        }
        
  
  auth(); */
  
  if(redirect){
    return <Redirect to="/" />
  }
  
    return (
      
       <Route {...rest} render={(rProps) => isLoggedIn ? <Component {...rProps}/>: <Redirect to="/" />} /> 
    )
  }

  export default PostsComponents;