import './App.css';
import Navbar from './Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blogs from './Pages/Home/Blogs';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import Signup from './Pages/Signup/Signup';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/MyProfile/MyProfile';
import MyOrders from './Pages/MyOrders/MyOrders';
import AddReviews from './Pages/AddReviews/AddReviews';
import Admin from './Pages/Admin/Admin';
import AddProduct from './Pages/AddProduct/AddProduct';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="purchase/:_id" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/orders' element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/review' element={<AddReviews></AddReviews>}></Route>
          <Route path='/dashboard/admin' element={<Admin></Admin>}></Route>
          <Route path='/dashboard/item' element={<AddProduct></AddProduct>}></Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
