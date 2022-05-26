import React from 'react';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user
    const handleMakeAdmin = () => {
        fetch(`https://sleepy-plains-65511.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res =>
                res.json())
            .then(data => {
                console.log(data)
                refetch();
            })
    }

    const handleDelete = () => {
        fetch(`https://sleepy-plains-65511.herokuapp.com/user/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Admin Delete sucessfull')
                    // setDeletingDoctor(null);
                    refetch();
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={handleMakeAdmin} class="btn btn-xs btn-primary">Make Admin</button>}</td>
            {/* <td><button onClick={handleMakeAdmin} class="btn btn-xs btn-primary">Make Admin</button></td> */}
            <td><button onClick={() => handleDelete()} class="btn btn-xs btn-error">Remove User</button></td>
        </tr>
    );
};

export default UserRow;