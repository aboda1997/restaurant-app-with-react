
import React  from  'react' ; 
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Comment from './CommentComponent';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';



function RenderDish ({dish}) {
return( 
    <div className= "col-12 col-md-5 m-1 ">
        
        <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
           < Card>
           <CardImg top src={baseUrl + dish.image} alt={dish.name} />
            <CardBody >
            <CardTitle> {dish.name}</CardTitle>
            <CardText className = "h6"> {dish.description}</CardText>
            </CardBody>
            </Card>
            </FadeTransform>
            </div>
        );
} 

    
const DishDetail =  (props)=>{ 

    let  dishdetail ; 
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish ){
        dishdetail = (  

              <div className = 'row'>
         <RenderDish dish = {props.dish} />
        < Comment dish_comments = {props.comments}
         postComment={props.postComment}
         dishId={props.dish.id}
         />
        </div>

        );

    }else {
        dishdetail = (<div> </div>)
    }

    return(
<div className = 'container'> 
<div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
        
              {dishdetail}
        </div>
    );}

export default DishDetail ;



