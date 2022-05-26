import React from 'react';
import Loading from '../Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useQuery } from 'react-query';
import { useForm } from 'react-hook-form';


const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        const item = {
            name: data.name,
            description: data.description,
            minimum_quantity: data.minimum_quantity,
            available_quantity: data.available_quantity,
            price: data.price,
            img: data.image
        }
        console.log(item)
        // send to your database 
        fetch('https://sleepy-plains-65511.herokuapp.com/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Item added successfully')
                    reset();
                }
                else {
                    toast.error('Failed to add the doctor');
                }
            })

    }


    return (
        <div>
            <h2 className="text-center text-3xl  text-accent w-full max-w-xs">Add a New Item</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            },
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum_quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Your Minimum_Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minimum_quantity", {
                            required: {
                                value: true,
                                message: 'Minimum_Quantity is Required'
                            },
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available_quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Your Available_Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("available_quantity", {
                            required: {
                                value: true,
                                message: 'available_quantity is Required'
                            },
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Your Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'price is Required'
                            },
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
               
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddProduct;
