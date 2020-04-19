import React, {Component} from 'react';
import './App.css';
import { Switch, NavLink, Route } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome.js'
import Contact from './Components/Contact/Contact.js'
import Menu from './Components/Menu/Menu.js'


 class App extends Component{
   render(){
  return (
    <div className='App'>
      <nav className='main-nav'>   
        <NavLink exact className='nav' activeClassName='active-link' to='/'>
          Welcome
        </NavLink>
        <NavLink exact className='nav' activeClassName='active-link' to='/contact'>
          Contact
        </NavLink>
        <NavLink exact className='nav' activeClassName='active-link' to='/menu'>
          Menu
        </NavLink>    
      </nav>
      <Switch>
        <Route exact path='/' render={()=> <Welcome/>}/>
        <Route exact path='/contact' render={()=> <Contact/>}/>
        <Route exact path='/menu' render={()=> <Menu/>}/>   
      </Switch>
    </div>
  );
 }
}

export default App;
