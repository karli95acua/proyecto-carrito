import React from 'react';
import {ModalBody, ModalHeader, ModalFooter, Modal, Container, Button, CardImg} from 'reactstrap';
import './FichaProducto.css';
import listaCarri from '../listaCarrito.json';

const {listaCarrito} = listaCarri;

class FichaProducto extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal:false,
            listaCarrito,
            stock: this.props.props.stock
        };

        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
    }

    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    agregarCarrito() {
        if(this.state.stock > 0) {
            listaCarrito.push({
                "titulo": this.props.props.titulo,
                "precio": this.props.props.precio
            });

        this.setState(prevState => ({
            modal: !prevState.modal,
            stock: prevState.stock - 1
        }));
    } else {
        alert('No hay stock disponible');
        this.setState({modal: false});
    }
}    

    render() {
        return (
            <Container>
                <Button onClick={this.toggle}>Ver Ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}/>
                        <p>El detalle del producto seleccionado es el siguiente:</p>
                        {this.props.props.descripcion}
                        <p>Este producto tiene un valor de <b>{this.props.props.precio}</b> pesos.</p>
                        <p>Hay <b>{this.state.stock}</b> unidades de este producto disponibles.</p>
                    </ModalBody>
                    <ModalFooter className="modalFooter">
                        <Button color="primary" onClick={this.agregarCarrito}>Agregar al carrito</Button>
                        <Button color="secondary" onClick={this.toggle}>Volver atrás</Button>
                    </ModalFooter>
                </Modal>
            </Container>    
        );
    }
}
export default FichaProducto;