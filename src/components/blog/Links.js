import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Links(){
    return(
        <nav className='nav__list'>
            <ul className="nav__list__con">
                <Link to="/">
                    <li className="active"><FontAwesomeIcon icon={['fas','home']} size="2x" /></li>
                </Link>
                <Link to="/articles">
                    <li><FontAwesomeIcon icon={['fas','newspaper']} size="2x" /></li>
                </Link>

                <Link to="/shopping">
                    <li><FontAwesomeIcon icon={['fas','shopping-cart']} size="2x" /> </li>
                </Link>
                
                <Link to="/registration">
                    <li><FontAwesomeIcon icon={['fas','user']} size="2x" /> </li>
                </Link>
                
            </ul>
        </nav>
    )
}

export default Links


