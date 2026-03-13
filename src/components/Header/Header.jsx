import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status )
  const navigate = useNavigate()
  
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className="sticky top-0 z-50 py-4 bg-white/80 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <Container>
        <nav className='lg:flex'>
          <div className='lg:mr-4'>
            <Link to= '/'>
              <Logo width='75px'/>
            </Link>
          </div>
          <ul className='items-center lg:flex lg:ml-auto'>
            {navItems.map((item)=>
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className="inline-block px-6 py-2 rounded-full text-sm font-medium text-stone-700 transition-all duration-300 ease-in-out hover:bg-stone-800 hover:text-white hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95">{item.name}</button>
              </li>
            ): null
            )}
            {authStatus && (
              <li >
                <LogoutBtn/>
              </li>
            )}

          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
