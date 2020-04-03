import React, { Component } from 'react';
import './Menu.css'
import Wedding from '../../wedding.png'
import Wedding2 from '../../wedding2.jpg'
import Wedding3 from '../../wedding3.jpg'
import Wedding4 from '../../wedding4.jpg'
import Wedding5 from '../../wedding5.jpg'
import Wedding6 from '../../wedding6.jpg'
import Wedding7 from '../Contact/wedding7.jpg'
import Wedding8 from '../Contact/wedding8.jpg'
import Wedding9 from '../Contact/wedding9.jpg'

class Menu extends Component {
    state={
        isopen:false,
        modal:null,
        image1:Wedding3

    }


onClicked = (picture) => {
    this.setState({modal:picture})
    this.setState({isopen:true})
    console.log(picture)
    console.log('click')

}
onClosed = () => {
    this.setState({isopen:false})
}
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
                    <div className='menu-img1' onClick={()=>this.onClicked('Wedding3')} >
                        <img  src={Wedding3} onClick={()=>this.onClicked(Wedding3)}/>
                        Flower2
                    </div>
                    <div className='menu-img2'>
                        <img src={Wedding4}/>
                    </div>
                    <div className='menu-img3'>
                        <img src={Wedding5}/>
                    </div>
                    <div className='menu-img4'>
                        <img src={Wedding7}/>
                    </div>
                    <div className='menu-img5'>
                        <img src={Wedding8}/>
                    </div>
                    <div className='menu-img6'>
                        <img src={Wedding9}/>
                    </div>
                </div>
                {(this.state.isopen === true)?(
                    <div className='modal'>
                        <img src={this.image1}/><br/><button onClick={()=>this.onClosed()}>X</button>
                    </div>):(<div></div>)
                }
            </div>
        )

    }
}
export default Menu