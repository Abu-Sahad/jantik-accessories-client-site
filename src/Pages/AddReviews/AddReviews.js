import React from 'react';

const AddReviews = () => {
    const handleReview = e => {
        e.preventDefault()
        const reviews = {
            review: e.target.review.value,
            ratings: e.target.ratings.value
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                e.target.reset()
            })
    }


    return (
        <div>
            {/* <h2 className='text-3xl text-accent p-4'>Please Add a Review</h2> */}

            <div className="card  flex justify-center items-center ">
                <div className="card-body mt-8">
                    <h2 className="card-title text-center text-2xl text-secondary w-full max-w-xs">Please Add a Review Of Item</h2>
                    <form onSubmit={handleReview} className='form-control'>

                        <textarea className="textarea textarea-success" name='review' required placeholder="Please comment here...... ">

                        </textarea>

                        <input
                            type="text"
                            name="ratings"
                            required
                            placeholder=" Please Rating Between 1 to 5"
                            className="input input-bordered my-2 input-success w-full max-w-xs"
                        />
                        <input
                            className="btn  w-full max-w-xs "
                            type="Submit"
                            value={"SUBMIT"}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReviews;