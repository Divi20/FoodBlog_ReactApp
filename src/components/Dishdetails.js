import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';




 function RenderDishDetail({dish}) {
       
            return(
                    <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody className="text-left">
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                
            );
       


    }

    const DishDetails = (props) => {
        if(props.dish != null){
        return(
        <div className="container">
        <div className="row">
        <Breadcrumb>

        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
    </Breadcrumb>
    <div className="col-12">
        <h3>{props.dish.name}</h3>
        <hr />
    </div>     
         
                  <div className="col-12 col-md-5 m-1">
        <RenderDishDetail dish={props.dish}></RenderDishDetail>
        </div>
     <div className="col-12 col-md-5 m-1">
        <RenderComments comments_array={props.comments}></RenderComments>
        </div>
        </div>
        </div>
                    );
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


export default DishDetails;