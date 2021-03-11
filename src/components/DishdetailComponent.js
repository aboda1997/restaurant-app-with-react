
import React  from  'react' ; 
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish ({dish}) {
    


return( 
    <div className= "col-12 col-md-5 m-1 ">

           < Card>
         <CardImg width = "100%" src = {dish.image} alt ={dish.name}/>
            <CardBody >
            <CardTitle> {dish.name}</CardTitle>
            <CardText className = "h6"> {dish.description}</CardText>
            </CardBody>
            </Card>
            </div>
        );
        } 

function RenderComments({dish_comments} ){
    if (dish_comments != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {dish_comments.map(comment => (
                    <ul key = {comment.id} className="list-unstyled h6">
                        <li>
                            <p >{comment.comment}</p>
                            <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year: "numeric", month: 'short', day:'2-digit'}).format( new Date (Date.parse(comment.date)))}</p>
                        </li>
                    </ul>
                )
                )}
            </div>
        );}
    else {
        return (
            <div></div>
        );

    }
}        
const DishDetail =  (props)=>{ 
    console.log('Dishdetail component render is invoked ');

    let  dishdetail ; 
    if (props.dish ){
        dishdetail = (  

              <div className = 'row'>
         <RenderDish dish = {props.dish} />
        < RenderComments dish_comments = {props.comments}/>
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



