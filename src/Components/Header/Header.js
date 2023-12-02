import React,{useContext} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { Link ,useNavigate} from 'react-router-dom';
import { AuthContext, firebaseContext } from '../../Store/Context';
import { getAuth,signOut } from 'firebase/auth';


function Header() {
  const {firebase}=useContext(firebaseContext)
  const {user,setUser}=useContext(AuthContext)
  const navigate=useNavigate()
  const doSignout=(e)=>{
    e.preventDefault();
      const auth=getAuth(firebase)
      signOut(auth).then((response)=>{navigate('/login')
      setUser(null)
    
    }).catch(err=>alert(err))
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span><Link to={'/login'} >{user?user[0]:'Login'}</Link></span>
          <hr />
        </div>
        <div className='loginPage'>
        {user && <span><Link onClick={e=>doSignout(e)}>Signout</Link></span>}
        </div>
        


        <div className="sellMenu" onClick={e=>
          
          navigate(user?'/create':'/login')}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
