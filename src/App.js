import Main   from  './components/MainComponent'; 
import React  ,  { Component } from  'react' ;  // add 
import './App.css';
import {BrowserRouter} from "react-router-dom" ; 
  class App extends Component{  // add 
  
  render() { // browserrouter use for  to navigate to client  generated view in  your app and history object 
    // <HashRouter> for static server  
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
