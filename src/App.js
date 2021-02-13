import Main   from  './components/MainComponent'; 
import React  ,  { Component } from  'react' ;  // add 
import './App.css';
import {BrowserRouter} from "react-router-dom" ; 
  class App extends Component{  // add 
  
  render() { // add  
  return (
    <BrowserRouter>
    <div >
      
      <Main/> 
    </div>
    </BrowserRouter>
  );
    }
}

export default App;
