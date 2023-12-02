import React,{useState,useContext} from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { Link,useNavigate } from 'react-router-dom';
import {firebaseContext} from '../../Store/Context';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {firebase}=useContext(firebaseContext)
  const auth=getAuth(firebase)
  const navigate=useNavigate()
  
  const handleSubmit=(e)=>{
      e.preventDefault()
      signInWithEmailAndPassword(auth,email,password).then((response)=>{
      console.log(response)
      navigate('/')


    }).catch((err)=>{
      
      alert(err.message)
    })

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={e=>handleSubmit(e)}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            onChange={e=>{setEmail(e.target.value)}}
            
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            onChange={e=>{setPassword(e.target.value)}}
            />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to={'/Signup'}>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
