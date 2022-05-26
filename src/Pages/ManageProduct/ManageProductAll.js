import React, { useState } from 'react';
import Modal from '../Modal/Modal';



const ManageProductAll = ({ item }) => {

    const [isdelete, setIsDelete] = useState(null)
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
                <label for="my-modal-6" onClick={() => setIsDelete(item)} class="btn modal-button">Delete User</label>
            </div>
            {isdelete && <Modal isdelete={isdelete} setIsDelete={setIsDelete} key={isdelete._id}></Modal>}

            {/* <button onClick={handleDelete} class="btn btn-active btn-accent">Button</button> */}


        </div>
    );
};

export default ManageProductAll;