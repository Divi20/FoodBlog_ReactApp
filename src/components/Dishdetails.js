import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';




 function RenderDishDetail({dish}) {
       
            return(
                <div className="row">
                  
                    <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody className="text-left">
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                  
                </div>
            );
       


    }

    const Dishdetails = (props) => {
        if(props.dish != null){
        return(
        <div className="container">
        <div className="row">
        <div className="col-6">
        <RenderDishDetail dish={props.dish}></RenderDishDetail>
        </div>
        <div className="col-6">
        <RenderComments comments_array={props.dish.comments}></RenderComments>
        </div>
        </div>
                    </div>);
                }else{
                    return(<div></div>);
                }
    }

   function RenderComments({comments_array}) {

        if(comments_array != null){

            return (
                <div className="text-left">
                    
                        <h4>Comments</h4>
                    
                    <ul className="list-unstyled">
                        {comments_array.map((comments) => 
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


export default Dishdetails;