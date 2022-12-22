import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className="main-Header" >
        <div className='main-header__inner'>
            <div className='main-header__left'>
                <Link to="/">jwt Auth</Link>
            </div>

            <div className='main-header__right'>
                <button className="btn">Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Header