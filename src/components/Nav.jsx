import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
function Nav() {

  const [sticky,setSticky] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>500? setSticky(true) : setSticky(false)
    })
  },[])
  const [mobileMenu,setMobileMenu] = useState(false)

  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) :setMobileMenu(true);
  }



  return (
    <nav className={`container ${sticky? 'dark-nav' :''}`}>
        <img src="./images/drA.png" alt=""  className='logo'/>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
         
            <li><Link to='programs' smooth={true} offset={-250} duration={500}>All Clubs</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
            <li><Link to='campus' smooth={true} offset={-350} duration={500}>Gallery</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-300} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-250} duration={500} className='btn'>Contact US</Link></li>
        </ul>
        <img src="./img/menu-icon.png" alt=""  className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Nav