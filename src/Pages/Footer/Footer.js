import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="p-10 bg-neutral text-neutral-content">
            <div className='footer'>
                <div>
                    <span class="footer-title">Jantik Accessories</span>
                    <p>Mirpur-2,Dhaka-1216,Commerce college road</p>
                    <p>01777777777</p>
                    <p>abu142@gmail.com</p>
                </div>
                <div>
                    <span class="footer-title">Information</span>
                    <Link to='/home' class="link link-hover">Home</Link>
                    <Link to='/blogs' class="link link-hover">Blogs</Link>
                    <Link to='/portfolio' class="link link-hover">Portfolio</Link>
                    <Link to='/dashboard' class="link link-hover">Dashboard</Link>

                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </div>
            <footer class="footer footer-center p-4">
                <div>
                    <p>Copyright © {year}  - All right reserved by Jantik Accessories Ltd</p>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;