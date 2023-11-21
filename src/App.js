import React from 'react';
import Producto from './Componentes/Producto';
import './App.css';
import {Container, Row} from 'reactstrap';
import Navegacion from './Componentes/Navegacion';
import listaPro from './listaProductos.json';

class App extends React.Component{
  constructor(){
    const {listaProductos} = listaPro;
    super();

    this.state = {
      listaProductos
    };
  }

  render() {
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos, i) =>{
        return(
          <Producto
          key={i}
          titulo={listaProductos.titulo}
          imagen={listaProductos.imagen}
          descripcion={listaProductos.descripcion}
          precio={listaProductos.precio}
          stock={listaProductos.stock}
          />
        )
      }
    ); 

  return(
    <Container>
      <Navegacion titulo="CompraRefaccionada.com"/>
      <Row>
        {arregloComponentes}
      </Row>
    </Container>
  );
}
}  

export default App;
