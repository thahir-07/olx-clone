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
  
  useEffect(() => {
    console.log('State updated:', postDetails);
  }, [postDetails]);
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
              console.log(product)
              setPostDetails(product)
                console.log("onclick")
                console.log("Context vaue",postDetails)
              
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
      { 
        products.map((post)=>{

          return(
            <div className="card" onClick={
             ()=>{
              setPostDetails(post)
              navigate('/viewpost')
             }
             
            }>
        <div className="favorite">
        <Heart></Heart>
        </div>
        <div className="image">
        <img src={post.imageUrl} alt="" />
        </div>
        <div className="content">
        <p className="rate">&#x20B9; {post.price}</p>
        <span className="kilometer">{post.category}</span>
        <p className="name">{post.name}</p>
        </div>
        <div className="date">
        <span>{post.createDate}</span>
        </div>
        </div>
          )
        })

        
      }
          
          
        </div>
      </div>
    </div>
  );
}

export default Posts;
