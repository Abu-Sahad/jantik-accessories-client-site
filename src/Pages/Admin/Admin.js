import React from 'react';
import UserRow from '../../hooks/useRow';
import { useQuery } from "react-query";
import Loading from '../Loading/Loading';

const Admin = () => {
    const {
        data: users,
        isLoading,
        refetch,
      } = useQuery("users", () =>
        fetch("http://localhost:5000/user").then((res) => res.json())
      );
    
      if (isLoading) {
        return <Loading></Loading>;
      }
    
      return (
        <div>
          <h2 className="text-2xl font-serif font-bold p-4">
            All Users:{users.length}
          </h2>
          <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Position</th>
                                <th>Remove User</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                               users.map((user,index)=><UserRow
                               key={user._id}
                               index={index}
                               user={user}
                               refetch={refetch}
                               ></UserRow>)
                           }
                        </tbody>
                    </table>
                </div>
        </div>
      );
};

export default Admin;