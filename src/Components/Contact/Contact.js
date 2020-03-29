import React, { Component } from 'react'
import './Contact.css'
import Wedding7 from './wedding7.jpg';
import Wedding8 from './wedding8.jpg';
import Wedding9 from './wedding9.jpg';
// import { Link } from 'react-router-dom;'


class Contact extends Component {
    render(){
        return(
            <div className='contact'>
                <div className='contact-title'>
                Contact Us.</div>
                <div className='contact-image'>
                    <img src={Wedding7} />
                    <img src={Wedding8} />
                    <img src={Wedding9} />
                </div>
                <div className='contact-number'>
                <span>510-999-8888</span><br/>Office hours<br/>Monday - Friday<br/>0700 am - 0100 pm </div>
                <div className='contact-email'>
                Richard Clemente<br/>gay courier<br/><a href="www.marbysneaker@gmail.com">Marbysneaker@gamil.com</a></div>
                <div className='contact-address'>
                
                23133 Kidder St <br/>Hayward, Ca. 94545<br/>United States</div>
            </div>


        )
    }
}
export default Contact;