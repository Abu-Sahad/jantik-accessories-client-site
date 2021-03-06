import React, { useEffect, useState } from 'react';
import Iteam from '../Iteam/Iteam';

const Iteams = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch('https://sleepy-plains-65511.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div className='my-28 mx-12'>
            <div className='text-center mb-10'>
                <h3 className='text-primary text-4xl font-bold uppercase'>Tools area</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    items.slice(0, 6).map(item => <Iteam
                        key={item._id}
                        item={item}
                    ></Iteam>)
                }
            </div>
        </div>
    );
};

export default Iteams;