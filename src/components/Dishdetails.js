import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class Dishdetails  extends Component {


    render() {


        const dish = this.props.dish;

        if(dish != null){
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                    <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody className="text-left">
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dish)}
                    </div>
                </div>
            );
        }else{
            return(<div></div>);
        }


    }

    renderComments(comments_array) {

        if(comments_array.comments != null){

            return (
                <div className="text-left">
                    
                        <h4>Comments</h4>
                    
                    <ul className="list-unstyled">
                        {comments_array.comments.map((comments) => 
                            <li key={comments.id}>
                                <p>{comments.comment}</p>
                                <p>-- {comments.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                                
                            </li>
                            ) } 
                    </ul>
                </div>
               
            );
        }else{
            return(<div></div>);
        }
    }
}

export default Dishdetails;