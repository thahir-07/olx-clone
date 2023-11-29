import React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Signup.css';
import firebaseContext from '../../Store/firebaseContext';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const {firebase} =useContext(firebaseContext)
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name,email,password,number)
    const auth=getAuth(firebase)
    createUserWithEmailAndPassword(auth,email,password).then((response)=>{
    console.log(response)
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={(e)=>{
          handleSubmit(e)

        }}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            value={name}
            defaultValue='Thahir'
            onChange={(e)=>setName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            onChange={e=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="tel"
            id="phone"
            name="phone"
            onChange={e=>{setNumber(e.target.value)}}
            
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            onChange={e=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to={'/login'}>Login</Link>
      </div>
    </div>
  );
}
