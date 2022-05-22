import './App.css';
import Navbar from './Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blogs from './Pages/Home/Blogs';
import Login from './Pages/Login/Login';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      {/* <h1>nav bar arae</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="login" element={<Login />} />
        <Route path="blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
