import React, {Component} from 'react';
import Wedding from '../../wedding.png'
import Wedding2 from '../../wedding2.jpg'
import Wedding3 from '../../wedding3.jpg'
import Wedding4 from '../../wedding4.jpg'
import Wedding5 from '../../wedding5.jpg'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram';
import './Welcome.css';


class Welcome extends Component {
    render(){
        return(

            <div className="App">
      <header className="App-header">
        <div id='sticky' className='main'>
          <div className="main-photo">
            
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

          <br/><button>Contact</button>
          </div>
          </div>
          <div className="main-example">
            <div className='example-title'>
            " We are located in the Bay Area "</div>
            <div className='example-1'>
            <img className='img1' src={Wedding2}/> <img className='img2' src={Wedding4}/>
            </div>
            <div className='example-1-des'>
            Philippines Armed Forces Chief Felimon Santos Jr. has tested positive for the coronavirus, according to CNN Philippines.

            Santos has been on home quarantine since March 24 after coming into contact with a senior officer who had tested positive for the virus. Santos received his results Thursday night and informed the Secretary of Defense Delfin Lorenzana, CNN Philippines reported.

            There are 707 confirmed cases of the coronavirus in the Philippines, and 45 deaths, according to Johns Hopkins.
            </div>
            <div className='example-2'>
            <img src={Wedding3}/><br/>
            <img src={Wedding5}/>
            </div>
            <div className='example-2-des'>
            There are now 25 sailors who have tested positive for the coronavirus aboard the aircraft carrier USS Theodore Roosevelt, just two days after the Pentagon announced that three sailors aboard the ship had tested positive for the virus, a Navy official has confirmed to CNN.

            The Navy says they expect there to be additional positive tests among the crew, with one official telling CNN there could possibly be "dozens" of new cases that emerge. A second official said that were there to be a large number of additional cases, the Defense Department would be unlikely to publicly specify how many of the Navy's overall cases are amongst members of the crew of the Roosevelt, due to concerns that adversaries such as China or North Korea could see the ship as vulnerable.
            </div>

          
          </div>

        
        </div>
      </header>
    </div>



        )
        }
}
export default Welcome


// <div className='main-nav'>
//         //     <ul>
//         //       <li>Welcome</li>
//         //       <li>Contact</li>
//         //       <li>Menu</li>
//         //     </ul>
          
          
//         //   </div>