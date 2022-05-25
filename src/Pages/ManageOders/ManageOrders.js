// import { setDate } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import ManageIndividualOrders from './ManageIndividualOrders';
// import { useAuthState } from 'react-firebase-hooks/auth';
//import Loading from '../../components/Loading';
// import auth from '../../firebase.init';
// import {ManageIndividualOrders} from './ManageIndividualOrders';

export const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
  //   const [user, loading] = useAuthState(auth);
  // const email = user.email;
  // console.log(email);
    useEffect( () => {
        fetch(`http://localhost:5000/order`)
        .then(res => res.json())
        .then(data => setOrders(data));
    }, [])

    if(orders === []){
        return <Loading></Loading>
    }
    console.log(orders);
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-32'>
            {
                orders.map(order => <ManageIndividualOrders key={order._id} order={order} orders={orders} setOrders={setOrders}></ManageIndividualOrders>)
            }
        </div>
    );
};