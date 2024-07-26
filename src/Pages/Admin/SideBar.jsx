import React from 'react'
import {FaHome} from 'react-icons/fa'
import { FaProductHunt } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className='w-auto bg-gray-800 fixed h-full px-3 pt-4'>
      <div className='my-2 mb-4'>
        <h1 className='text-2xtext-white font-hold text-white '>
            Admin 
        </h1>
      </div>
      <hr/>
      <ul className='mt-3 text-white font-bold pt-2'>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2' >
          <Link to='/admin'>
          <FaHome className='inline-block w-6 h-6 mr-2 -mt-2' ></FaHome>
          Home
          </Link>
        </li>
        <br/>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <FaProductHunt className='inline-block w-6 h-6 mr-2 -mt-2' ></FaProductHunt>
          <Link to ='/AdminProducts'>
          Products
          </Link>
        </li>
        <br/>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <FaUser className='inline-block w-6 h-6 mr-2 -mt-2' ></FaUser>
          Users
        </li>
      </ul>
    </div>
  )
}
