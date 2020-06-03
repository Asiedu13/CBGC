import React from 'react'
import { FontAwesomIcon, FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer(){
    return(
        <section className="footer">
            <div className="footer__elem">

                <li className="footer__elem__child">About Us</li>                
                <li className="footer__elem__child">Our mission</li>                
                <li className="footer__elem__child">privacy policy</li>                
            </div>

            <div className="footer__elem">
                
                <li className="footer__elem__child">Online Shop</li>                
                <li className="footer__elem__child">Clarkson's Foods</li>                
                <li className="footer__elem__child">Clarkson's Articles</li>
                <li className="footer__elem__child">Clarkson's Counselling </li>

            </div>
            <div className="footer__elem">
                <li className="footer__elem__child">Clarkson's Blog</li>                
                <li className="footer__elem__child">+233 344 32 099 </li>                
                <li className="footer__elem__child">Clarksonduku25@gmail.com</li>                
                <li className="footer__elem__child">P.O.Box AT 1486</li>                

                <div className="footer__elem__socialmedia">
                    <FontAwesomeIcon icon="apple-alt" size="2x" />
                    <FontAwesomeIcon icon="apple-alt" size="2x" color="royalblue" />
                    <FontAwesomeIcon icon="apple-alt" size="2x" color="red" />
                </div>                
            </div>

        </section>
    )
}
export default Footer;