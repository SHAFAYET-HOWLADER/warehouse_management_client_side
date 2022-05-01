import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Topbar from './Components/Pages/Shared/Topbar';
import NotAvailable from './NotAvailable/NotAvailable';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Blog from './Components/Pages/Blog/Blog';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Inventory from './Inventory/Inventory';
import InventoryDetails from './Inventory/InventoryDetails/InventoryDetails';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div className="root">
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <InventoryDetails />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotAvailable />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
