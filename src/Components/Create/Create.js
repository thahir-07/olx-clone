import React, { Fragment ,useState,useContext} from 'react';
import './Create.css';
import Header from '../Header/Header';
import {getStorage,ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'
import { getFirestore,collection,addDoc } from 'firebase/firestore';
import { AuthContext, firebaseContext } from '../../Store/Context';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const [name,setName]=useState(null)
  const [category,setCategory]=useState(null)
  const [price,setPrice]=useState(null)
  const [image,setImage]=useState(null)
  const {firebase}=useContext(firebaseContext)
  const {user}=useContext(AuthContext)
  const storage=getStorage(firebase)
  const db=getFirestore(firebase)
  const navigate=useNavigate()
  const date=new Date()
  const handleSubmit=(e)=>{
    const img_ref=ref(storage,`/images/${image.name}`)
    uploadBytesResumable(img_ref,image).then((result)=>{
      getDownloadURL(result.ref).then((url)=>{
          console.log(url)
          try{
            addDoc(collection(db,'products'),{
              name,
              category,
              price,
              imageUrl:url,
              user:user[2],
              createDate:date.toDateString()

            })
            navigate('/')
          }catch(err){
            alert("Error")
          }
      })
    }).catch((err)=>{
      console.log(err)
    })
    
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="Name"
              name="Name"
              onChange={e=>setName(e.target.value)}
              
            />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="category"
              name="category"
              onChange={e=>setCategory(e.target.value)}
              
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="price" name="Price" onChange={e=>setPrice(e.target.value)} />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):''}></img>
          
            <br />
            <input type="file" multiple onChange={e=>setImage(e.target.files[0])} />
            <br />
            <button className="uploadBtn" onClick={e=>handleSubmit(e)}>upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
