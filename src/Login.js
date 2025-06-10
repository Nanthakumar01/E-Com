import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import StoreIcon from '@mui/icons-material/Store';
import  {auth} from "./firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'

const Login = () => {

const navigate = useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

const signIn = (e) =>{
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    signInWithEmailAndPassword(auth,email.trim(), password.trim())
        .then((userCredential) =>{
            navigate('/')
        })
        .catch(error => alert(error.message));
}

const signUp = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    createUserWithEmailAndPassword(auth, email.trim(), password.trim())
      .then(auth => {
        if (auth) {
          navigate('/')
        }
      })
      .catch(error => alert(error.message))
  }


  return (
    <div className='login'>
        <Link to='/' style={{textDecoration:'none'}}>
            <div className='login__logo'>
                <StoreIcon className='login__logoImage' fontSize='large'/>
                <h2 className='login__logTitle'>eShop</h2>
            </div>
        </Link>

        <div className='login__container'>
            <h1>Sign In</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={signIn} type='submit' className='login__signInButton'>Sign In</button>
            </form>

            <p>By sign in you agree to the eShop website's conditions</p>
            <button onClick={signUp} className='login__registerButton'>Create your eShop account</button>
        </div>
    </div>
  )
}

export default Login