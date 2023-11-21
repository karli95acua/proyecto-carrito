import React from 'react';
import {Badge, Button, Popover, PopoverBody, PopoverHeader, Table} from 'reactstrap';
import listaCarri from '../listaCarrito';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


class Carro extends React.Component{
    constructor(){
        const {listaCarrito} = listaCarri;
        super();
        this.state={
            popoverOpen:false,
            listaCarrito
        };

        this.toggle=this.toggle.bind(this);
    }

    toggle(){
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    }

    calcularTotal() {
        return this.state.listaCarrito.reduce((acumulador, producto) => {
            let precio = parseInt(producto.precio) * 1000;
            return acumulador + precio;
        }, 0);
    }    

        render(){
            const arregloCarrito = this.state.listaCarrito.map(
                (listaCarrito, i) => {
                    return (
                        <tr key={i}>
                            <td>{(i += 1)}</td>
                            <td>{listaCarrito.titulo}</td>
                            <td>{listaCarrito.precio}</td>
                        </tr>
                    );
                }
            )

            return(
                <div>
                    <Button id="Popover1" color="primary">
                        <span className='carrito'><FontAwesomeIcon icon={faShoppingCart} /></span>
                        <Badge color="tertiary">{arregloCarrito.length}</Badge>
                    </Button>
                    <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                        <PopoverHeader>Listado de compras</PopoverHeader>
                        <PopoverBody>
                            <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {arregloCarrito}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td><b>Total:</b></td>
                                    <td></td>
                                    <td>{this.calcularTotal()} CLP</td>
                                </tr>
                            </tfoot>
                            </Table>
                        </PopoverBody>
                    </Popover>
                </div>
                );
            }
}

export default Carro;