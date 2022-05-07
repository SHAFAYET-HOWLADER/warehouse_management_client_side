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
import Inventory from './Inventory/Inventory';
import InventoryDetails from './Inventory/InventoryDetails/InventoryDetails';
import AddBook from './Components/Pages/AddBook/AddBook';
import ManageBook from './Components/Pages/ManageBook/ManageBook';
import RequireAuth from './RequireAuth/RequireAuth';
import AllBooks from './Components/Pages/AllBooks/AllBooks';
import MyBooks from './Components/Pages/MyBooks/MyBooks';
import MyBooksDetails from './Components/Pages/MyBooks/MyBooksDetails/MyBooksDetails';
import ManageMyBooks from './Components/Pages/MyBooks/ManageMyBooks/ManageMyBooks';
function App() {
  return (
    <div className="root">
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/allBooks' element={<AllBooks />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<NotAvailable />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/inventory/:inventoryId' element={<RequireAuth><InventoryDetails /></RequireAuth>}></Route>
        <Route path='/ManageInventories' element={<RequireAuth><ManageBook /></RequireAuth>}></Route>
        <Route path='/ManageMyBooks' element={<RequireAuth> <ManageMyBooks/> </RequireAuth>}></Route>
        <Route path='/myBooks' element={<RequireAuth><MyBooks/></RequireAuth>}></Route>
        <Route path='/myBooks/:myId' element={<RequireAuth> <MyBooksDetails/> </RequireAuth>}></Route>
        <Route path='/addBook' element={<RequireAuth> <AddBook /></RequireAuth>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotAvailable />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
