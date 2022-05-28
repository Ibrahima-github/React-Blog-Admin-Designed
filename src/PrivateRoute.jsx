import React, {useState} from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function search() {
    const userRequestResponse = await fetch(process.env.REACT_APP_API + 'utilisateurs/user', {
        headers: { 'Content-type': 'application/json', 'Accept': 'application/json'},
        credentials: 'include'
      });
      
      console.log(userRequestResponse);
      
       const userRequestContent = await userRequestResponse.json();
       
       console.log(userRequestContent.message);
       
          if(userRequestContent.message === 'Authenticated'){
            setIsLoggedIn(true);
          }else{
            alert(userRequestContent.message);
          }
          return isLoggedIn;
}
  // Add your own authentication on the below line.
  
        search(); 

    
        
        return (
    <Route
      {...rest}
      render={props => 
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute