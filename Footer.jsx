import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
           <div className='footer-content-left'>
             <img src={assets.logo}></img>
             <p> Lorem Ipsum is simply dummy text of the printing and typesetting
             industry.</p>
             <div className='footer-social-icons'>
                <img src={assets.facebook_icon}></img>
                <img src={assets.twitter_icon}></img>
                <img src={assets.linkedin_icon}></img>
             </div>
           </div>
           <div className='footer-content-center'>
             <h2>COMPANY</h2>
             <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>

             </ul>

           </div>
           <div className='footer-content-right'>
               <h2>GET IN TOUCH</h2>
               <ul>
                <li>+919002576535</li>
                <li>amarsingh2014@gmail.com</li>
               </ul>
           </div>
        </div>
        <hr/>
            <p className='footer-copyright'>
                Copyright 2024 @ Tomato.com . All Right Reserve </p>
    </div>
  )
}

export default Footer
