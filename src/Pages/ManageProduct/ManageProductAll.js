import React from 'react';

const ManageProductAll = ({ item }) => {

    const handleDelete = () => {
        fetch(`https://sleepy-plains-65511.herokuapp.com/item/${item?._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

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
            </div>
            <button onClick={handleDelete} class="btn btn-active btn-accent">Button</button>
        </div>
    );
};

export default ManageProductAll;