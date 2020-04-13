import React, { Component } from 'react';
import Menu from './MenuCompnent';
import {connect} from 'react-redux'
import Header from './Header';
import Footer from './Footer';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import Home from './Home';
import Contact from './ContactComponent'
import DishDetails from './Dishdetails';
import About from './About';
import {addComment} from '../redux/ActionCreators'

const mapStateToProps = state =>{
  return {
    dishes:state.dishes,
    leaders:state.leaders,
    comments:state.comments,
    promotions:state.promotions
  }

}
const mapDispatchToProps = (dispatch) => ({
  addComment:(dishId,rating,author,comment) => dispatch(addComment(dishId,rating,author,comment))
})
class Main extends Component{

  constructor(props){
    super(props);

  
  }

  
render() {

  const HomePage = () => {
    return(
        <Home 
            dish={this.props.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
            leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
    );
  }

  const DishWithId = ({match}) => {
    return(
        <DishDetails dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
          addComment={this.props.addComment}/>
    );
  };

  const AboutLeaders = () =>{
    return(
      <About leaders = {this.props.leaders}></About>
    );
  }
  return (
    <div className="App">
     <Header></Header>
    <Switch>
    <Route path="/home" component={HomePage}></Route>
    <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}></Menu>}></Route>
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
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
