import React from 'react';

const Review = ({ item }) => {
    //const { review, ratings } = item.review;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <p>{item.review}</p>
                <p className="font-bold ">Ratings:{item.ratings}</p>

            </div>
        </div>
    );
};

export default Review;