import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3QVVImFAdF5nYD5ehKa28ejcLGh8azF5ydG021I1ceP8dwz0EtAuqt40iGufvGtrs93L55lG1S6BxmkgDPFGsU00SXTlshQ8');

const Payment = () => {
    const { id } = useParams();
    const url = `https://sleepy-plains-65511.herokuapp.com/order/${id}`;

    const { data: purchase, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div class="card w-50 max-w-md bg-base-100 shadow-xl">
                <div class="card-body">
                    <p className='text-success font-bold'>Hello, {purchase.userName}</p>
                    <h2 class="card-title">Pay for item: {purchase.tool}</h2>
                    <h2 class="card-title">We will see the Quantity: {purchase.quantity}</h2>
                    <p>Please pay:${purchase.price}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm purchase={purchase} />
                    </Elements>

                </div>
            </div>
        </div>

    );
};

export default Payment;