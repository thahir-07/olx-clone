import React,{useState,useContext, useEffect} from 'react';

import './View.css';
import { postContext } from '../../Store/PostContext';
function View() {
  const [userDetails,setUserDetails]=useState(null)
  const {postDetails,setPostDetails}=useContext(postContext)
  useEffect(()=>{

  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src="../../../Images/R15V3.jpg"
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; 250000 </p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  );
}
export default View;
