import React, { Component } from 'react'
import './Contact.css'
import Wedding7 from './wedding7.jpg';
import Wedding8 from './wedding8.jpg';
import Wedding9 from './wedding9.jpg';


class Contact extends Component {
    render(){
        return(
            <div className='contact'>
                <div className='contact-title'>
                Contact Us</div>
                <div className='contact-image'>
                    <img src={Wedding7} />
                    <img src={Wedding8} />
                    <img src={Wedding9} />
                </div>
            </div>


        )
    }
}
export default Contact;