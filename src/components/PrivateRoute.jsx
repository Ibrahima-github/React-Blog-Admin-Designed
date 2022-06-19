import React, {useEffect, useState} from 'react'
import { Redirect, Route } from 'react-router-dom'
import Login from '../pages/Login'

const PrivateRoute = ({ component: Component,...rest }) => {

  
  
  
    /* console.log(userRequestResponse);
    
     const userRequestContent = await userRequestResponse.json();
     console.log(userRequestContent);
     console.log(userRequestContent.message);
     
        if(userRequestContent.message === 'Authenticated'){
         
          setIsLoggedIn(true);
           */
        
//  }, [])
 /*  const auth = async () => {

    
        }
        
  
  auth();
   */
        
        return (
    <Route
      {...rest}
      render={props => 
        Login ? (
          <Component exact {...props}  />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute;