import React from 'react';
import {Navbar,NavItem,NavLink,Nav,NavbarBrand} from 'reactstrap'
import Cart from './Cart.js'

class Navegation extends React.Component {
    render(){
        return(
            <Navbar color="light" light expand="xl">
                <NavbarBrand href="/">{this.props.title}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">React</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Js</NavLink>
                    </NavItem>
                    <NavItem>
                        <Cart/>
                    </NavItem>
                    
                </Nav>
            </Navbar>
        );
    }
}
export default Navegation;