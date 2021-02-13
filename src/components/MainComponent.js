import React  ,  { Component } from  'react' ;  // add 
import Menu  from  './MenuComponent'; 
import Home from  './HomeComponent'  ;  
import DishDetail from  './DishdetailComponent';
import  {DISHES } from  "../shared/dishes"  ;  
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import  {Switch , Route , Redirect } from  'react-router-dom' ; 

  class Main extends Component{  // add 
  constructor(props){
    super(props) ; 
    this.state = {
      dishes:DISHES ,
      
    };
  }

  render() { // add  

    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
  return (
    <div >
 <Header />
 <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
  </Switch>
  <Footer />

      
    </div>
  );
    }
}

export default Main;
/* 
<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />*/