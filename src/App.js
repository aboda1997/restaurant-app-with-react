import Main   from  './components/MainComponent'; 
import React  ,  { Component } from  'react' ;  // add 
import './App.css';
//function App() {
  class App extends Component{  // add 
  
  render() { // add  
  return (
    <div >
      
      <Main/> 
    </div>
  );
    }
}

export default App;
