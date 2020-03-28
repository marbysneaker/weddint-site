import React from 'react';
import './App.css';
import { Switch, NavLink, Route} from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome.js'
import Contact from './Components/Contact/Contact.js'
import Menu from './Components/Menu/Menu.js'


function App() {
  return (
    <div className='App'>
      <nav className='main-nav'>   
        <NavLink exact id='nav' activeClassName='active-link' to='/'>
          Welcome
        </NavLink>
        <NavLink exact id='nav' activeClassName='active-link' to='/contact'>
          Contact
        </NavLink>
        <NavLink exact id='nav' activeClassName='active-link' to='/menu'>
          Menu
        </NavLink>    
      </nav>
      <Route exact path='/' component={Welcome}/>
     

      
    </div>
  );
}

export default App;
