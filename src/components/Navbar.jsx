import React, { useState } from 'react'
import {MdKeyboardArrowDown} from "react-icons/md"

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
        <nav>
            <div className='nav-logo'>
                <span>LOGO</span>
            </div>
            <ul className={openMenu ? "open" : ""}>
                <li><a href='#'>Qualifications <MdKeyboardArrowDown size={20} style={{paddingTop: '5px'}}/></a></li>
                <li><a href='#'>Organizations <MdKeyboardArrowDown size={20} style={{paddingTop: '5px'}}/></a></li>
                <li><a href='#'>Research & Analysis <MdKeyboardArrowDown size={20} style={{paddingTop: '5px'}}/></a></li>
                <li><a href='#'>Lorem ipsum <MdKeyboardArrowDown size={20} style={{paddingTop: '5px'}}/></a></li>
                <li><a href='#'>Lorem ipsum <MdKeyboardArrowDown size={20} style={{paddingTop: '5px'}}/></a></li>
                <li><a className='nav-button' href='#'>Enrolment</a></li>
            </ul>
            <div className='mobile-menu' onClick={() => setOpenMenu(!openMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
  )
}

export default Navbar