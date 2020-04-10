import React, { Component } from 'react';
import Menu from './MenuCompnent';
import { DISHES } from './shared/dishes.js'
import Header from './Header';
import Footer from './Footer';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      
    };
  }

  
render() {

  const HomePage = () =>{
    return(<h1>homepage</h1>);
  }
  return (
    <div className="App">
     <Header></Header>
    <Switch>
    <Route path="/home" component={HomePage}></Route>
    <Route path="/menu" component={()=><Menu dishes={this.state.dishes}></Menu>}></Route>
    <Redirect to="/home"></Redirect>
    </Switch>
      <Footer></Footer>
    </div>
  );
}
}
export default Main;
