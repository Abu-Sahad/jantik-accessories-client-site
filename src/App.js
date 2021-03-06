import './App.css';
import Navbar from './Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
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
import Portfolio from './Pages/Portfolio/Portfolio';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import Blogs from './Pages/Blogs/Blogs';
import Payment from './Pages/Payment/Payment';
import { ManageOrders } from './Pages/ManageOders/ManageOrders';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="payment/:id" element={<Payment />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="purchase/:_id" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route path='/dashboard/my-profile' index element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/orders' element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/review' element={<AddReviews></AddReviews>}></Route>
          <Route path='/dashboard/admin' element={<Admin></Admin>}></Route>
          <Route path='/dashboard/item' element={<AddProduct></AddProduct>}></Route>
          <Route path='/dashboard/manage-product' element={<ManageProduct></ManageProduct>}></Route>
          <Route path='/dashboard/manage-orders' element={<ManageOrders></ManageOrders>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
