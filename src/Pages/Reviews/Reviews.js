import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })

    }, [])
    return (
        <div className='my-28 mx-12'>
            <div className='text-center mb-10'>
                <h3 className='text-primary text-4xl font-bold uppercase'>Review area</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    reviews.slice(0, 6).map(item => <Review
                        key={item._id}
                        item={item}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;