import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loading></Loading>
    }

    const handleProfile = event => {
        event.preventDefault()

        const profile = {
            name: user.displayName,
            email: user.email,
            education: event.target.education.value,
            location: event.target.location.value,
            phone: event.target.phone.value,
            link: event.target.link.value
        }

        fetch('https://sleepy-plains-65511.herokuapp.com/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset()
            })
    }


    return (
        <div>

            <div className="card  flex justify-center items-center ">
                <div className="card-body mt-8 ">
                    <h2 className="card-title text-center text-3xl  text-accent w-full max-w-xs">Update Your Profile</h2>
                    <form onSubmit={handleProfile} className='form-control'>
                        <input
                            type="text"
                            name="name"

                            disabled
                            value={user?.displayName || ""}
                            className="input input-bordered my-2 input-success w-full max-w-xs"
                        />
                        <input
                            type="email"
                            name="email"
                            disabled
                            value={user?.email || ""}
                            className="input input-bordered my-2 input-success w-full max-w-xs"
                        />
                        <input
                            type="text"
                            name="phone"
                            required
                            placeholder="Your Number"
                            className="input input-bordered my-2 input-success w-full max-w-xs"
                        />
                        <input
                            type="text"
                            name="location"
                            required
                            placeholder="Your Address"
                            className="input input-bordered my-2 input-success w-full max-w-xs"
                        />
                        <input
                            type="text"
                            name="education"
                            required
                            placeholder="Education"
                            className="input input-bordered my-2 input-success w-full max-w-xs"
                        />
                        <input
                            type="text"
                            name="link"
                            required
                            placeholder="LinkedIn profile link"
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

export default MyProfile;