import React from 'react';
import { CardText, CardSubtitle, CardTitle, CardBody, CardImg, Col, Card} from 'reactstrap';
import './Producto.css';
import FichaProducto from './FichaProducto';

class Producto extends React.Component{
    render(){
        return(
            <Col sm="3">
                <Card className="Card" body outline color="dark">
                    <CardImg className='CardImg' src={this.props.imagen}/>
                    <CardBody className='CardBody'>
                        <CardTitle className='CardTitle'>{this.props.titulo}</CardTitle>
                        <CardSubtitle><b>Valor: </b>${this.props.precio}</CardSubtitle>
                        <CardText>
                            {this.props.descripcion}
                        </CardText>
                        <FichaProducto className='BotonProducto' props={this.props}/>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default Producto;