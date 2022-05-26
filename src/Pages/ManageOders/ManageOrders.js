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
    useEffect(() => {
        fetch(`https://sleepy-plains-65511.herokuapp.com/order`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    if (orders === []) {
        return <Loading></Loading>
    }
    console.log(orders);
    return (
        <div>
            {/* <h2 className="text-2xl font-serif font-bold p-4">Manage All Orders Here:{tools.length}</h2> */}
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{order.userName}</td>
                                <td>{order.userEmail}</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>

    );
};