import React from 'react'
import {useDispatch} from 'react-redux'
import authService from "../../appwrite/auth"
import {logout} from "../../store/authSlice"

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className="inline-block px-6 py-2 rounded-full text-sm font-medium text-stone-700 transition-all duration-300 ease-in-out hover:bg-stone-800 hover:text-white hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
    onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn
