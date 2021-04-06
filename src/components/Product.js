import React from 'react';
import {Button, CardTitle,CardBody,CardImg,Col,Card, CardSubtitle, CardText} from 'reactstrap';
import './Product.css';
import SheetProduct from './SheetProduct';
class Product extends React.Component{
    render(){
        return(
            <Col sm= "4">
                <Card className= "card" body outline color="primary">
                    <CardImg src={this.props.img}></CardImg>
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle><b>Ranking :</b> {this.props.ranking}</CardSubtitle>
                        <CardText>{this.props.description}</CardText>
                        <SheetProduct props={this.props} key ={this.key} />
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Product;
