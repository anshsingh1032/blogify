import { useState , useEffect} from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { BrowserRouter, Outlet } from 'react-router-dom'

function App() {
  const[loading,setLoading]=useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      } else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-[#f4f1ea]'>
      <div className='max-w-7xl w-full mx-auto'>
        <Header />
        <main className='min-h-[80vh] py-6'>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) :
      <div className="min-h-screen flex items-center justify-center bg-[#f4f1ea]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-stone-300 border-t-amber-600 rounded-full animate-spin"></div>
          <p className="text-stone-500 font-medium tracking-wide animate-pulse">
            Loading your experience...
          </p>
        </div>
      </div>

}

export default App
