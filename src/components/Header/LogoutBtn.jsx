import React from 'react'
import {useDispatch} from 'react-redux';
import authService from '../../appwrite/auth';
import {logout} from "../../store/authSlice"

export default function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.userLogout().then(()=>{
            dispatch(logout())
        })
    }

  return (
    <div>
      <button className='rounded-lg bg-blue-600 text-white text-center'>Logout</button>
    </div>
  )
}
