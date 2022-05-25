import React from 'react';
import './Support.css'
import { BiSupport } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';
import { GiTakeMyMoney } from 'react-icons/gi';
import { RiLuggageCartFill } from 'react-icons/ri';


const Support = () => {
    return (

        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-12">

            <div class="">
                <div class="card-body items-center text-center">
                    <RiLuggageCartFill className='icon-size'></RiLuggageCartFill>
                    <h3>Free Shipping</h3>
                    <p>Free shipping on US order or above order $200</p>
                </div>
            </div>
            <div class="">
                <div class="card-body items-center text-center">
                    <BiSupport className='icon-size'></BiSupport>
                    <h3>Support 24/7</h3>
                    <p>Contact us 24 hours a day. 7 days a week</p>
                </div>
            </div>
            <div class="">
                <div class="card-body items-center text-center">
                    <GiTakeMyMoney className='icon-size'></GiTakeMyMoney>
                    <h3>60-Days Return</h3>
                    <p>If you don;t it, you have 60 days to return it.</p>
                </div>
            </div>
            <div class="">
                <div class="card-body items-center text-center">
                    <MdPayment className='icon-size'></MdPayment>
                    <h3>Secure Payment</h3>
                    <p>We ensure secure payment with the PEV</p>
                </div>
            </div>
        </div>
    );
};

export default Support;