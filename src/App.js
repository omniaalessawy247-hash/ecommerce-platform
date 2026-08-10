import React, { Component } from 'react';
import Allnavbar from './Home/Allnavbar';
import Allfooter from './Home/Allfooter';
import { Container, Row, Col } from 'react-bootstrap'; 
import Allhome from './Home/Allhome';
import Allheader from './Home/Allheader';
 

class Allproducts extends Component {
  state = {
    products: [],
  }


  render() {
    return (
      <div>
        <Allnavbar/>
        <Allheader/>
        <Allhome/> 
        <Container>
          <Row>
            {this.state.products.map(item => (
              <Col md="3" className="text-center mb-3" key={item.id}>
                <img 
                  style={{ height: "300px" }}  
                  src={item.images[0]} 
                  className='img-fluid' 
                  alt={item.title}  
                />
                <h5>{item.title}</h5>
               
              </Col>
            ))}
          </Row>
        </Container>
        <Allfooter />
      
      </div>
      
    );
  }
}

export default Allproducts;
