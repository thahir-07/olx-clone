import React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Signup.css';
import {AuthContext, firebaseContext} from '../../Store/Context';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import { getFirestore,collection,addDoc } from 'firebase/firestore';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState(null);
  const {firebase} =useContext(firebaseContext)
 
  const navigate=useNavigate()
  const db=getFirestore(firebase)
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name,email,password,phone)
    const auth=getAuth(firebase)
    createUserWithEmailAndPassword(auth,email,password).then(async (response)=>{
    console.log(response.user)
    response.user.displayName=name


    try{
      const docRef=await addDoc(collection(db,'user'),{
        id:response.user.uid,
        username:response.user.displayName,
        phone:phone
        
      })
      navigate('/login')
    }catch(e){
      console.log(e)
    }   
    
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={(e)=>{
          handleSubmit(e)

        }}>
          <label htmlFor="name">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
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
            value={phone}
            onChange={e=>{setPhone(e.target.value)}}
            
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
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
