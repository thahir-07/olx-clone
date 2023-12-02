import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import ViewPost from './Pages/ViewPost'
import Create from './Pages/Create'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {useContext,useEffect} from 'react'
import { AuthContext, firebaseContext } from './Store/Context'
import { getAuth,onAuthStateChanged } from 'firebase/auth'
import Post, {postContext} from './Store/PostContext'


function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(firebaseContext)
  const auth=getAuth(firebase)
  useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        if(user){
          const user_details=['Thahir',user.email,user.uid]
          setUser(user_details)
        }
      })
      
      
  })
  return (
    <Post>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' Component={Home}/>
    <Route path='/login' Component={Login}/>
    <Route path='/Signup' Component={Signup}/>
    <Route path='/create' Component={Create}/>
    <Route path='/viewpost' Component={ViewPost}/>
    </Routes>
    
    </BrowserRouter>
    </Post>
    
     );
}

export default App;
