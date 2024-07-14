import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrUser()
    .then((userData)=>{
      if(i=userData){
        dispatch(login({useDispatch}))
      } else {
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  }, [])

  return !loading ? (
    <>
    <Header/>
    <div className='h-screen w-screen bg-center bg-blue-600 '>
      <h1 className='text-center justify-center align-middle text-white'>Hi</h1>
    </div>
    <main>
      {/* <Outlet/> */}
    </main>
    <Footer/>
    </>
  ) : <></>
}

export default App
