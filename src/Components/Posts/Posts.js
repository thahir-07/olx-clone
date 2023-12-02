import React,{useEffect,useContext,useState} from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { Link,useNavigate } from 'react-router-dom';
import { firebaseContext } from '../../Store/Context';
import { getDocs,getFirestore ,collection} from 'firebase/firestore';
import { postContext } from '../../Store/PostContext';

function Posts() {
  const {firebase}=useContext(firebaseContext)
  const [products,setProducts]=useState([])
  const {postDetails,setPostDetails}=useContext(postContext)
  const navigate=useNavigate()
  const db=getFirestore(firebase)
  
  useEffect(()=>{
    getDocs(collection(db,'products')).then((snapshot)=>{
      console.log(snapshot)
      const allposts=snapshot.docs.map((product)=>{
        return {
          ...product.data(),
          id:product.id
        
        }
      })
      setProducts(allposts)
    })
  },[])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
        
          {
            products.map((product)=>{
              return(
                
            <div className="card" onClick={()=>{
              setPostDetails(product)
              navigate('viewpost')
            }}>
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.imageUrl} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createDate}</span>

            </div>
          </div>
         
              )
            })
          }
          
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
      <Link to={'/viewpost'} className='link'>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Posts;
