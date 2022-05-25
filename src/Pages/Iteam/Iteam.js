import React from 'react';
import { useNavigate } from 'react-router-dom';

const Iteam = ({ item }) => {
    const navigate = useNavigate();
    const { _id } = item
    const purchaseItem = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={item.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h1 class="card-title">Name: {item.name}</h1>
                <h3>Price: ${item.price}</h3>
                <h3>Minimum-Quantity:{item.minimum_quantity}</h3>
                <h3>Available-Quantity:{item.available_quantity}</h3>
                <p>Description: {item.description}</p>
                <div class="card-actions">
                    <button class="btn btn-accent" onClick={() => purchaseItem(_id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Iteam;



