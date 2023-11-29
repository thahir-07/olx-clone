import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import ViewPost from './Pages/ViewPost'
import Create from './Pages/Create'
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' Component={Home}/>
    <Route path='/login' Component={Login}/>
    <Route path='/Signup' Component={Signup}/>
    <Route path='/create' Component={Create}/>
    <Route path='/viewpost' Component={ViewPost}/>
    </Routes>
    
    </BrowserRouter>
    
     );
}

export default App;
