import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';
import menu1 from '../assets/images/menu-01.jpg';
import menu2 from '../assets/images/menu-02.jpg';
import menu3 from '../assets/images/menu-03.jpg';
import menu4 from '../assets/images/menu-04.jpg';
import menu5 from '../assets/images/menu-05.jpg';
import menu6 from '../assets/images/menu-06.jpg';

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <Carousel className="mb-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>

      <div className="container">
        <Row className="justify-content-center text-center mx-0 mb-4">
          {[menu1, menu2, menu3, menu4, menu5, menu6].map((menu, index) => (
            <Col key={index} xs={4} md={2} className="mb-3">
              <img 
                src={menu} 
                alt={`Menu ${index + 1}`} 
                className="rounded-circle img-fluid shadow-sm" 
                style={{ width: '120px', height: '120px', objectFit: 'cover' }} 
              />
            </Col>
          ))}
        </Row>
        
        <h2 className="text-danger fw-bold mt-4" style={{ color: '#d93043' }}>This is Home Page</h2>
      </div>
    </div>
  );
};

export default Home;
