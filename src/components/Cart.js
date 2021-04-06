import React from 'react';
import {Popover, PopoverHeader, PopoverBody, Table, Badge,Button} from 'reactstrap';
import {listCart} from '../listCart'

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            popoverOpen:false,
            listCart
        };
        this.toggle =this.toggle.bind(this);
    };
    toggle(){
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    };
    render(){
        var total= 0;
        const arrayCart = this.state.listCart.map(
            (listCart,i)=> {
                return (
                    total+=parseFloat(listCart.price),
                    <tr>
                        <td>{(i += 1)}</td>
                        <td>{listCart.title}</td>
                        <td>{listCart.price} USD</td>
                    </tr>
                );
            }
        )
        return(
            <div>
                <Button id="Popover1" color = "info">
                <span class="material-icons">shopping_cart</span>
                    <Badge id="BadgeCart" color="secondary">{arrayCart.length}</Badge>
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader>Patreon Donation</PopoverHeader>
                    <PopoverBody>
                        <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrayCart}
                            <tr>
                                <th>Total</th>
                                <th></th>
                                <th>{total} USD</th> 
                            </tr>
                        </tbody>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}
export default Cart;