import React from 'react';

const Subscribe = () => {
    return (
        <section className=" mx-10 d-flex justify-center">
            <div class="card shadow my-5 w-75">
                <div class="card-body ">
                    <form>
                        <div className='text-center mb-10'>
                            <h3 className='text-primary text-4xl font-bold uppercase'>Subscribe Now</h3>
                            <div className='mt-5'>
                                <input type="email" className=" w-full px-5 py-5 input input-bordered input-accent form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Enter Your Email" />
                            </div>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-accent w-full">Subscribe</button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Subscribe;
