import React, { useEffect, useState } from 'react';
import Iteam from '../Iteam/Iteam';

const Iteams = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div className='my-28 mx-12'>
            <div className='text-center mb-10'>
                <h3 className='text-primary text-xl font-bold uppercase'>Tools area</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    items.slice(0, 6).map(item => <Iteam
                        key={item.id}
                        item={item}
                    ></Iteam>)
                }
            </div>
        </div>
    );
};

export default Iteams;