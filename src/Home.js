import React, {useState, useEffect} from 'react';
import { Navigation } from './Navigation';
import {Redirect} from 'react-router-dom';

 const Home = () => {
 
  
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    (
      async () => {
          
        const response = await fetch(process.env.REACT_APP_API + 'utilisateurs/user', {
          headers: { 'Content-type': 'application/json', 'Accept': 'application/json'},
          credentials: 'include'
        });

        console.log(response);
        
        if(response.status !== 200){
          setRedirect(true);
        }
         const content = await response.json();
          
        //console.log(content.title);

        if(content && content.title === 'Unauthorized'){
          setRedirect(true);
          
        }
      }
    )()
    {redirect ? <Redirect to="/login" /> : <Redirect to="/home" />}
  })

  return(
    <div className="contentCss">

    <div>

      <Navigation />
    </div>
    <div className="mt-5 d-flex justify-content-left">
                This is HomePage

            </div>
    </div>
  );
    
}

export default Home;