import React from 'react'
import {Link} from 'react-router-dom'
import { NavLink ,useNavigate} from 'react-router-dom'

function Navbar() {
 const navigate= useNavigate()


  return (
    <div className='navbar'>
        <h1>DEMO LOGO</h1>
        <ul>
         <NavLink to='/'><li>Home</li></NavLink>   
            <NavLink to='/products'><li>Products</li></NavLink>
            <NavLink to='/about'><li> About</li></NavLink>   
            <NavLink to='/contact'><li>Contact</li></NavLink>
            <NavLink to='/jobs'><li>Jobs</li></NavLink>
        </ul>
        <button onClick={()=> navigate('contact',{replace:true})}>Get Started</button>
        {/* { replace: true }:
Normally, when you navigate to a new page, React Router adds that page to the browser's history.
replace: true means do not add this page to the history. Instead, it replaces the current page.
This is useful when you don't want users to go "back" to the previous page using the browser's back button. */}
    </div>
  )
}

export default Navbar