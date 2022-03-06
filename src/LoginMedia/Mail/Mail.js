import React from 'react';
import { useState } from 'react';
import './Mail.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

const Mail = () => {
  const [email, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();
  let history = useHistory();

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  }

  const handleEmailChange = (e) => {
    setUser(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

    const handleRegistration= (e) =>{
      e.preventDefault();
        console.log(email, password);

        if(password.length < 6){
          setError('password should be at least 6 characters');
          return;
        }

        isLogin? processLogin(email, password) : createNewUser(email, password);
      }

      const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setError('');
          history.push("/login");
        })
        .catch(err => {
          setError("Didn't match the email or password");
        })
      }

      const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setError('Create Account Successfully');
        })
        .catch((error) => {
          const errorMessage = error.message;
          // alert("password should be at least 6 characters");
          console.log(errorMessage);
          setError("Already use the email, please try another one");
        })
      }

    return (
      <div  className="mx-5">
         <div className="container">
         <form  onSubmit={handleRegistration}>
            <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
            <br/>
            <div  className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3"/>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required/>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                  <input onChange = {toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
                  <label className="form-check-label" htmlFor="gridCheck1">
                     Have an account? Login
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-3 text-danger">{error}</div>
            <button type="submit" className="btn btn-primary row">{isLogin ? 'Login' : 'Register'}</button>
          </form>
         </div>
       <br /><br /><br />
    </div>
    );
};

export default Mail;