import React, { Component } from 'react';
import './Menu.css'
import Wedding from '../../wedding.png'
import Wedding2 from '../../wedding2.jpg'
import Wedding3 from '../../wedding3.jpg'
import Wedding4 from '../../wedding4.jpg'
import Wedding5 from '../../wedding5.jpg'
import Wedding6 from '../../wedding6.jpg'

class Menu extends Component {
    render(){
        return(

            <div className='menu'>
                <div className='menu-title'>
                " Menu "</div>
                <div className ='menu-list'>
                <ul>
                    <li>Flower2</li>
                    <br/>
                    <li>Flower3</li>
                    <br/>
                    <li>Flower4</li>
                    <br/>
                    <li>Flower5</li>
                    <br/>
                    <li>Flower6</li>
                    <br/>
                    <li>Flower7</li>
                    <br/>
                    <li>Flower8</li>
                    <br/>
                    <li>Flower9</li>
                    <br/>
                </ul></div>
                <div className='menu-images'>
                    <div className='menu-img1'>
                        <img src={Wedding3}/>
                    </div>
                    <div className='menu-img2'>
                        <img src={Wedding4}/>
                    </div>
                    <div className='menu-img3'>
                        <img src={Wedding5}/>
                    </div>
                </div>
            </div>
        )

    }
}
export default Menu