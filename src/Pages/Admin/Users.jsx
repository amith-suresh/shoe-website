import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GoBackButton from '../../Components/GoBackButton';

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setData(response.data.map(user => ({
          id: user.id,
          FirstName: user.fname,
          SecondName: user.lname,
          email: user.email,
          cart:user.cart[0]
        })));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchData();
  }, []);

  const RemoveItem = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3000/users/${id}`).then((res) => {
      alert("successfully deleted");
      console.log(res.data);
      window.location.reload()
    });
  };

  
  const userDetails = data.map(user => (
    <div key={user.id} className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">ID</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.id}</dd>
      <dt className="text-sm font-medium text-gray-500">Name</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.FirstName} {user.SecondName}</dd>
      <dt className="text-sm font-medium text-gray-500">Email</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>

      <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={()=>RemoveItem (user.id)}
              >
                Remove user
              </button>
    </div>
  ));

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border p-6">
      <GoBackButton />
      <div className="px-4 py-5 sm:px-6">
        <h1 className="text-lg leading-6 font-medium text-gray-900">
          User Profiles
        </h1>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          {userDetails}
        </dl>
      </div>
    </div>
  );
}

export default Users;
