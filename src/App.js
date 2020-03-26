import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wedding from './wedding.png'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='sticky' className='main'>
          <div className='main-nav'>
            <ul>
              <li>Welcome</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          
          
          </div>
          <div className="main-photo">
            
          </div>
          <div className="main-example">
          
          </div>
          <div className='main-content'>
          <div className='main-title'>
          Wedding Florist  
          <br/>
          <span><a href="https://www.facebook.com/" ><FacebookIcon /></a>
          <a href="https://www.twitter.com"><TwitterIcon/></a><a href="https://www.instagram"><InstagramIcon/></a></span>
          </div>       
          <div className='main-des'>
          Richard Clemente <br/>
          gay courier from falck
          </div>
          </div>
        

        
        </div>
      </header>
    </div>
  );
}

export default App;
