import React,{ Component } from 'react';
import { Card,CardImg,CardImgOverlay,CardText,CardTitle,CardBody } from 'reactstrap'; 

class DishDetail extends Component{

    render(){
        const {dish}=this.props;
        return(
            <div className="row">
                {this.renderDish(dish)}
            </div>
        );
    }

    renderDish=(dish)=> {
        if (dish != null){
            return(
                <React.Fragment>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </React.Fragment>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    
    renderComments=(comments)=>{
        if(comments!=null){
            const com=comments.map((comment) =>{
                return(
                    <React.Fragment>
                        <li style="list-style-type:none;">
                            {comment.comment}
                        </li><br/>
                        <li style="list-style-type:none;">
                            --{comment.author},{this.formatDate(comment.date)}
                        </li><br/>
                    </React.Fragment>
                    );
                });
            return(
                <ul>
                    {com}
                </ul>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    formatDate(date){
        const option = {year: 'numeric', month: 'short', day: 'numeric'};
        const date1 = new Date(date)
        const newDate = date1.toLocaleDateString("en-US",option)
        return newDate;
    }
}

export default DishDetail;