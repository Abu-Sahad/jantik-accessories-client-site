import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user, loading] = useAuthState(auth)
    const email = user.email
    //console.log(email)

    useEffect(() => {
        fetch(`https://sleepy-plains-65511.herokuapp.com/order?email=${email}`)
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setOrders(data)
            })
    }, [email])

    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-2xl font-serif font-bold p-4 '>Your Orders:{orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No</th>

                            <th>item</th>
                            <th>Quantity</th>
                            <th>payment</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => <tr key={order._id} >

                            <th>{index + 1}</th>
                            <td>{order.tool}</td>
                            <td>{order.quantity}</td>
                            <td>
                                {(order.price && !order.paid) && <Link to={`/payment/${order._id}`}><button className="btn text-semibold px-6 btn-error btn-xs">pay</button></Link>}
                                {(order.price && order.paid) && <button className="btn text-semibold px-6 btn-error btn-xs">paid</button>}

                            </td>
                            <td><button className="btn text-semibold px-10 btn-accent  btn-xs">cancel</button></td>

                        </tr>)}



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;