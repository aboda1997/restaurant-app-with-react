import Main   from  './components/MainComponent'; 
import React  ,  { Component } from  'react' ;  // add 
import './App.css';
import {BrowserRouter} from "react-router-dom" ; 
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore'; 

const store = ConfigureStore();
  class App extends Component{  // add 
  
  render() { // browserrouter use for  to navigate to client  generated view in  your app and history object 
    // <HashRouter> for static server  
  return (
    <Provider store={store}>
    <BrowserRouter>   
    <div >
      
      <Main/> 
    </div>
    </BrowserRouter>
    </Provider>
  );
    }
}

export default App;
