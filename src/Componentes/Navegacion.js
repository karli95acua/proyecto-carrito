import React from 'react';
import {NavItem, Nav, NavbarBrand, Navbar} from 'reactstrap';
import Carro from './Carro';
import './Navegacion.css';

class Navegacion extends React.Component {

    render(){
        return(
            <Navbar color="light" light expand="xl">
                <div className='glitch' data-text={this.props.titulo}>
                    <NavbarBrand href="/"></NavbarBrand>
                </div>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Carro/>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
export default Navegacion;