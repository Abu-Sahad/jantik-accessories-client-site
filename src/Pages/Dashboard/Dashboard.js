import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../useAdmin/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                <h2 className='text-5xl text-purple-500'>Dashboard</h2>
                <Outlet></Outlet>
                {/* <!-- Page content here --> */}
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {user && !admin &&
                        <>
                            <li><Link to="/dashboard" >My Profile</Link></li>
                            <li><Link to="/dashboard/orders">My orders</Link></li>
                            <li><Link to="/dashboard/review">Add A Review</Link></li>

                        </>
                    }

                    {admin && (
                        <>
                            <li className="mb-3">
                                <NavLink to="/dashboard/item">Add Products</NavLink>
                            </li>

                            <li className="mb-3">
                                <NavLink to="/dashboard/manage-products">Manage Products</NavLink>
                            </li>

                            <li className="mb-3">
                                <NavLink to="/dashboard/manage-orders">Manage All Orders</NavLink>
                            </li>
                            <li className="mb-3">
                                <NavLink to="/dashboard/admin">Make Admin</NavLink>
                            </li>
                        </>
                    )}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;