import React, { Component } from 'react';
import Menu from './MenuCompnent';
import { DISHES } from './shared/dishes.js'
import { COMMENTS } from './shared/comments.js'
import { LEADERS } from './shared/leaders.js'
import { PROMOTIONS } from './shared/promotions.js'
import Header from './Header';
import Footer from './Footer';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './Home';
import Contact from './ContactComponent'
import DishDetails from './Dishdetails';
import About from './About';

class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      comments: COMMENTS
      
    };
  }

  
render() {

  const HomePage = () => {
    return(
        <Home 
            dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
    );
  }

  const DishWithId = ({match}) => {
    return(
        <DishDetails dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    );
  };

  const AboutLeaders = () =>{
    return(
      <About leaders = {this.state.leaders}></About>
    );
  }
  return (
    <div className="App">
     <Header></Header>
    <Switch>
    <Route path="/home" component={HomePage}></Route>
    <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}></Menu>}></Route>
    <Route exact path='/contactus' component={Contact} />} />
    <Route path='/menu/:dishId' component={DishWithId} />
    <Route path='/aboutus' component={AboutLeaders}></Route>
    <Redirect to="/home"></Redirect>
    </Switch>
      <Footer></Footer>
    </div>
  );
}
}
export default Main;
