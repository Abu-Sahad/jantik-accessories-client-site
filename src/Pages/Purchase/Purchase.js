import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { _id } = useParams();
    const [itemDetail, setItemDetail] = useState([]);
    const [reload, setReload] = useState(false)
    //const [isDisabled, setIsDisabled] = useState(false);
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`http://localhost:5000/item/${_id}`)
            .then((res) => res.json())
            .then((data) => setItemDetail(data));
    }, [itemDetail, _id]);

    const handleSubmit = e => {
        e.preventDefault()
        const quantity = e.target.quantity.value
        const min = itemDetail.minimum_quantity
        const max = itemDetail.available_quantity

        //const priceall = quantity * itemDetail.price;


        if (quantity < min || quantity > max) {
            alert('Your Quantity have to be between min and Available Quantity')
            setReload(!reload)
            //setIsDisabled(true)
            return
        }
        else {

            alert('delivered your order')
        }

        const orders = {
            userEmail: user.email,
            userName: user.displayName,
            phone: e.target.phone.value,
            address: e.target.address.value,
            tool: itemDetail.name,
            quantity: e.target.quantity.value,
            price: e.target.price.value

        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                e.target.reset()
            })

    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col  lg:flex-row-reverse">
                <div className="card max-w-lg bg-base-100 shadow-xl">
                    <figure>
                        <img className="w-40" src={itemDetail.img} alt={itemDetail.name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-extrabold ">
                            {itemDetail.name}

                        </h2>
                        <p className="text-semibold">Description:{itemDetail.description}</p>
                        <p> <span className="text-xl font-bold">Available Quantity:</span> {itemDetail.available_quantity} </p>
                        <p> <span className="text-xl font-bold">Minimum Order Quantity:</span> {itemDetail.minimum_quantity} </p>
                        <p> <span className="text-xl font-bold">Price:$</span> {itemDetail.price} </p>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className='form-control'>
                            <input
                                type="text"
                                name="name"

                                disabled
                                value={user?.displayName || ""}
                                className="input input-bordered my-2 input-success w-full max-w-xs"
                            />
                            <input
                                type="email"
                                name="email"
                                disabled
                                value={user?.email || ""}
                                className="input input-bordered my-2 input-success w-full max-w-xs"
                            />
                            <input
                                type="text"
                                name="phone"
                                required
                                placeholder="Your Number"
                                className="input input-bordered my-2 input-success w-full max-w-xs"
                            />
                            <input
                                type="text"
                                name="address"
                                required
                                placeholder="Your Address"
                                className="input input-bordered my-2 input-success w-full max-w-xs"
                            />
                            <input type="number" defaultValue={itemDetail.minimum_quantity} className="input input-bordered my-2 input-success w-full max-w-xs" name="quantity" placeholder="Set quantity" />
                            <input type="number" className="input input-bordered my-2 input-success w-full max-w-xs" name="price" placeholder="price" />
                            <input
                                type="Submit"
                                value={"Order"}
                                //disabled={isDisabled}
                                className="btn btn-secondary my-2 w-80 text-white"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;