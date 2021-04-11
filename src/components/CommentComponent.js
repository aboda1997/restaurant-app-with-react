import React ,   {Component} from 'react' ;
import {Button, Modal, ModalHeader, ModalBody  , Label,  Col, Row} from  'reactstrap' ; 
import { Control, LocalForm, Errors } from 'react-redux-form';
import {  Fade, Stagger } from 'react-animation-components';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Comment extends Component {
    constructor(props){
        super(props) ;
        this.toggleModal = this.toggleModal.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);


        this.state = {
          isModalOpen: false
        };

    }
 
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      handleSubmit(values) {
          this.toggleModal();
          this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);


      }
    render(){
        if (this.props.dish_comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <Stagger in>
                    {this.props.dish_comments.map(comment => (
                        <ul key = {comment.id} className="list-unstyled h6">

                            <li>
                            <Fade in>

                                <p >{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year: "numeric", month: 'short', day:'2-digit'}).format( new Date (Date.parse(comment.date)))}</p>
                                </Fade>

                            </li>
                        </ul>
                    )
                    )} 
                    </Stagger>
                    <Button outline color="secondary"  onClick={this.toggleModal}   ><i class="fa fa-comments fa-lg"> Submit Comment</i></Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}> {/* to close without close x in any click */}
                    <ModalHeader toggle={this.toggleModal}>Submit Comment </ModalHeader>{/* for x close button */}
                    <ModalBody>
                    <LocalForm onSubmit={ (values)=> this.handleSubmit(values)}>
                    <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.Select model=".rating" id="rating" name="rating"
                                    
                                        className="form-control"
                                         >
                                         
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>


                                    </Control.Select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.Text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                          <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: '',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment </Label>
                                <Col md={12}>
                                    <Control.Textarea model=".comment" id="comment" name="comment"
                                        rows="8"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                    
    
                </div>
            );}
        else {
            return (
                <div></div>
            );
    
        }

    }
}
export default Comment ;
