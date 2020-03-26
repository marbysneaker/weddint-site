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
          <span>RICHARD CLEMENTE</span>
          <br/>
          <span><a href="https://www.facebook.com/" ><FacebookIcon /></a>
          <a href="https://www.twitter.com"><TwitterIcon/></a><a href="https://www.instagram"><InstagramIcon/></a></span>
          </div>       
          <div className='main-des'>
          Richard Clemente <br/>
          gay courier from falck
          A 34-year-old Italian nurse treating COVID-19 patients in the hard-struck European country has taken her own life for fear of having spread the illness, according to a nursing organization there.
          Daniela Trezzi worked in the intensive care unit of San Gerardo of Monza Hospital, according to a translated statement from the National Federation of Nurses of Italy, in a region described as “one of the major Italian fronts of the pandemic.”

          Trezzi and her colleagues treating quarantined patients showing coronavirus symptoms felt “heavy stress for fear of having infected others,” according to the federation, which noted the “pain and dismay” of its members “at the news of a young colleague who has not made it.”
          <br/><button>Contact</button>
          </div>
          </div>
        

        
        </div>
      </header>
    </div>
  );
}

export default App;
