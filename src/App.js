import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Topbar from './Components/Pages/Shared/Topbar';

function App() {
  return (
    <div className="root">
      <Topbar/>
       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/home' element={<Home/>}></Route>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
