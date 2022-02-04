import logo from './logo.svg';
import './App.css';
import {Route , Routes , BrowserRouter, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AddNews from './pages/AddNews'
import LandingPage from './pages/LandingPage'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import NewsDesc from './pages/NewsDesc';
import PostedNewsItems from './pages/PostedNewsItems';
import EditNews from './pages/EditNews';


function App() {
  
  return (
    <div className="App">
       <ToastContainer />
       <BrowserRouter>
          <Routes>
          <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
            <Route path='/add' element={<ProtectedRoute><AddNews/></ProtectedRoute>} />
            <Route path='/edit/:newsid' element={<ProtectedRoute><EditNews/></ProtectedRoute>} />
            <Route path='/posted' element={<ProtectedRoute><PostedNewsItems /></ProtectedRoute>} />
            <Route path='/newsdesc/:newsid' element={<ProtectedRoute><NewsDesc/></ProtectedRoute>} />
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;


export const ProtectedRoute=({children})=>{

  if(localStorage.getItem('sheynews-user')){
        return children
  }else{
      return <Navigate to='/' />
  }

}
