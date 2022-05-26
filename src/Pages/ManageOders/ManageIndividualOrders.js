
import React from 'react';
const ManageIndividualOrders = ({ order }) => {

    return (
        // <div data-aos='fade-up'>
        //     <h2>name:{order.userName}</h2>

        // </div>
        <div class="col-span-1">
            {order.userName} <br />
            {order.userEmail}
        </div>

    );
};

export default ManageIndividualOrders;