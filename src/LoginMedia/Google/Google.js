import React from 'react';
import initializeAuthentication from '../../Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from 'react';
import './Google.css';


initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const Google = () => {

    const [user, setUser] = useState({})
    const auth = getAuth();

    const handleGoogleSignIn = () =>{

        signInWithPopup(auth, googleProvider)
        .then(result => {
          const {displayName, email, photoURL} = result.user;
          const logeInUser = {
            name: displayName,
            email: email,
            photo: photoURL
          };
          setUser(logeInUser);
        })
        .catch(error => {
          const errorMessage = error.message;
          const errorCode = error.code;
        })
      }
    
      const handleSignOut = () =>{
        signOut(auth)
        .then( () =>{
          setUser({});
        })
      }
    

    return (
        <div id="body" className="mx-5">
            {/* {!user.name ?
        <div>
          <button className="googleSignInBtn" onClick = {handleGoogleSignIn}>Sign In with Google</button>
        </div> :
        <button className="googleSignInBtn" onClick = {handleSignOut}>Log Out</button>
      } */}

      {
        !user.name &&<div> 
          <button className="googleSignInBtn" onClick = {handleGoogleSignIn}>Sign In with Google</button>
        </div>
       
      }

      <br/>
      {
        user.email && <div>
              <h1>Hello {user.name}</h1>
              <h3> Email address: {user.email}</h3>
              <br />
              <img src={user.photo} alt="" />
              <br /> <br />
              <button className="googleSignInBtn" onClick = {handleSignOut}>Log Out</button>
          </div>
      }
     </div>
    );
};

export default Google;