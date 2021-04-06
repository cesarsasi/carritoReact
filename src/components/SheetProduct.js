import React from 'react';
import {Modal, Button, Container, ModalHeader, ModalBody, ModalFooter, CardImg, Form} from 'reactstrap';
import './SheetProduct.css';
import {listCart} from '../listCart.json';
import {listProducts} from '../listProducts.json';

class SheetProduct extends React.Component{
    constructor(props){
        super();
        this.state = {
            modal:false,
            listCart,
            stock: props.props.stock
        };
        this.toggle = this.toggle.bind(this);
        this.addCart = this.addCart.bind(this);
    };

    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    addCart(){
        listCart.push({
            "title": this.props.props.title,
            "price": this.props.props.price
        });
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));  
        if(this.state.stock != 0){
            this.setState(prevState => ({
                stock: prevState.stock -1
            })); 
        }else{
            alert('No Stock')
        }    
        const badgeCart = document.getElementById("BadgeCart");
        badgeCart.innerText = listCart.length;
    }

    render(){
        return(
            <Container>
                <Button onClick={this.toggle}>See Sheet</Button>
                <Modal isOpen = {this.state.modal}>
                    <ModalHeader>{this.props.props.title}</ModalHeader>
                    <ModalBody>
                        <CardImg src ={this.props.props.img}/>
                        <p> The details of this album:</p>
                        <i>{this.props.props.description}</i>
                        <p>This Album has a score of <b>{this.props.props.ranking}</b> points.</p>
                        <p>Donations :<b>{this.props.props.price}</b> dolars.</p>
                        <p>Stock: <b>{this.state.stock}</b> units </p>
                    </ModalBody>
                    <ModalFooter className="modalFooter">
                    <Button color="primary" onClick={this.addCart}> Buy Album </Button>
                    <Button color="secondary" onClick={this.toggle}> Rate </Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}
export default SheetProduct;