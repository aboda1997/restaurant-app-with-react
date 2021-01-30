import logo from './logo.svg';
import './App.css';
import Menu  from  './component/MenuComponent'; 
import React  ,  { Component } from  'react' ;  // add 
import {Navbar ,  NavbarBrand} from  'reactstrap';
//function App() {
  class App extends Component{  // add 
    render() { // add  
  return (
    <div >
      < Navbar dark color = "primary"> 
      <div className = "container"> 
       < NavbarBrand href = "/"> welcome to my  page </NavbarBrand>
      </div>
      </Navbar>
      <Menu/> 
    </div>
  );
    }
}

export default App;
/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className = "App-title">Welcome to React </h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/ 