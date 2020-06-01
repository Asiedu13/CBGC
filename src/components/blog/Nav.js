import React from 'react'
import Logo from './Logo'
import Links from './Links'
import '../../css/blog/main.css'


function Nav(){
    return(
        <div className="nav">
            <Logo />
            <Links />
        </div>
    )
}
export default Nav;