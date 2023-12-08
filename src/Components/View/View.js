import React,{useState,useContext, useEffect} from 'react';
import './View.css';
import { postContext } from '../../Store/PostContext';
import { firebaseContext } from '../../Store/Context';
import {collection,getFirestore,query,getDocs,where } from 'firebase/firestore'
function View() {
  const [userDetails,setUserDetails]=useState(null)
  const {postDetails}=useContext(postContext)
  const {firebase}=useContext(firebaseContext)
  const db=getFirestore(firebase)
  const {user}=postDetails
  useEffect(()=>{
    console.log("postDetails",postDetails)
    console.log(user)
      const q=query(collection(db,'user'),where('id','==',user))
      getDocs(q).then((querySnapshot)=>{
        querySnapshot.forEach((snapshot)=>{
          console.log("Snapshot",snapshot.data())
        setUserDetails({data:snapshot.data(),id:querySnapshot.id})

        })
      })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.imageUrl}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createDate}</span>
        </div>
        {userDetails &&<div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.data.username}</p>
          <p>{userDetails.data.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
