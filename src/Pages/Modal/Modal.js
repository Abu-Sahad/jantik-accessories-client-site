import React from 'react';

const Modal = ({ isdelete, seIsDelete }) => {
    const { _id } = isdelete;

    const handleDelete = () => {
        fetch(`https://sleepy-plains-65511.herokuapp.com/item/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Your Item Is Deleted</h3>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">Cancel</label>
                        <label onClick={handleDelete} for="my-modal-6" class="btn">Delete</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;