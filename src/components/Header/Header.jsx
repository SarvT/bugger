import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import {Link,useNavigate} from "react-router-dom";
import {useSelector} from "react-redux"

export default function Header() {
const authStatus = useSelector((state)=>state.auth.status)
const navigate = useNavigate()

const navItems= [
  {
    name:"Home",
    slug:"/",
    active:true
  },
  {
    name:"Login",
    slug:"/login",
    active:!authStatus
  },
  {
    name:"Signup",
    slug:"/signup",
    active:!authStatus
  },
  {
    name:"All posts",
    slug:"/posts",
    active:authStatus
  },
  {
    name:"Add post",
    slug:"/add-post",
    active:authStatus
  },
]
  return (
    <header>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to={"/"}>
              <Logo width='70px'/>
            </Link>
          </div>

          <ul className='flex ml-auto'>
            {navItems.map((it)=>
            it.active ? (<li key={it.name}>
              <button onClick={()=>navigate(it.slug)} className='inline-block px-6 py-2 duration-200 hover:bg-blue-400 rounded-full'>{it.name}</button>
            </li>) : null
            )}

            {authStatus && (
              <li><LogoutBtn/></li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
