
import React ,  {Component} from  'react' ; 
import { Card ,  CardImg , CardText , CardBody,CardTitle } from  "reactstrap";

class DishDetail  extends Component{
    
renderDish(dish){
    if(dish != null){
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
        }else{
return (
        <div>

        </div>);} 
                   }
renderComments(dish_comments ){
    if (dish_comments.length !== 0) {
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
render(){ 
    let  dishdetail ; 
    if (this.props.dish ){
        dishdetail = (  <div className = 'container'> 
              <div className = 'row'>
         {this.renderDish(this.props.dish)}
        {this.renderComments(this.props.dish.comments)}  
        </div>

        </div> );

    }else {
        dishdetail = (<div> </div>)
    }

    return(
        <div className = "row">
            {dishdetail}
        </div>
    );}}

export default DishDetail ;



