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
        images:[{
                'menu-img1':Wedding3},
                {'menu-img2':Wedding4},
                {'menu-img3':Wedding5},
                {'menu-img4':Wedding6},
                {'menu-img5':Wedding7},
                {'menu-img6':Wedding8},
                 {'menu-img7':Wedding9}]


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


        this.state.images.map((images, index)=>(
          
            console.log(Object.keys(images))
            
          ))
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
                </ul>
                </div>
                <div className='menu-images'>
                {this.state.images.map((images,index)=>(
                    <div className={Object.keys(images)}>
                        <img src={Object.values(images)} onClick={()=> this.onClicked(Object.values(images))} />
                    </div>
                ))}
                </div>
                {(this.state.isopen === true)?(
                    <div className='modal'>
                        <img src={(this.state.modal)} alt='modal-image'/><br/><button onClick={()=>this.onClosed()}>X</button>
                    </div>):(<div></div>)
                }
            </div>
        )

    }
}
export default Menu



// <div className='menu-img2'>
// <img src={Wedding4}/>
// </div>
// <div className='menu-img3'>
// <img src={Wedding5}/>
// </div>
// <div className='menu-img4'>
// <img src={Wedding7}/>
// </div>
// <div className='menu-img5'>
// <img src={Wedding8}/>
// </div>
// <div className='menu-img6'>
// <img src={Wedding9}/>
// </div>