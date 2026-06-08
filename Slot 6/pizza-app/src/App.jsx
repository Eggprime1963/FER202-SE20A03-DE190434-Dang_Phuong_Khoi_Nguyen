import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Navbar, Container, Nav, Form, Button, Carousel, Row, Col, Card } from 'react-bootstrap';

import pizza1 from './assets/images/pizza1.jpg';
import pizza2 from './assets/images/pizza2.jpg';
import pizza3 from './assets/images/pizza3.jpg';
import pizza4 from './assets/images/pizza4.jpg';
import pizza5 from './assets/images/pizza5.jpg';
import menu1 from './assets/images/menu1.jpg';
import menu2 from './assets/images/menu2.jpg';
import menu3 from './assets/images/menu3.jpg';
import menu4 from './assets/images/menu4.jpg';

const pizzas = [
  { id: 1, name: "Margherita Pizza", image: menu1, price: "$24.00", originalPrice: "$40.00", badge: "SALE" },
  { id: 2, name: "Mushroom Pizza", image: menu2, price: "$25.00", originalPrice: null, badge: null },
  { id: 3, name: "Hawaiian Pizza", image: menu3, price: "$30.00", originalPrice: null, badge: "NEW" },
  { id: 4, name: "Pesto Pizza", image: menu4, price: "$30.00", originalPrice: "$50.00", badge: "SALE" }
];

function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3 custom-navbar">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-3 serif-font">Pizza House</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-4">
              <Nav.Link href="#home" className="active">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex search-form">
              <Form.Control
                type="search"
                placeholder="Search"
                className="rounded-0 border-0"
                aria-label="Search"
              />
              <Button variant="danger" className="rounded-0 search-btn">
                <i className="bi bi-search">🔍</i>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carousel */}
      <Carousel controls={true} indicators={false}>
        <Carousel.Item className="hero-carousel-item">
          <img
            className="d-block w-100 hero-img"
            src={pizza1}
            alt="First slide"
          />
          <Carousel.Caption className="hero-caption">
            <h2 className="serif-font">Neapolitan Pizza</h2>
            <p>If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="hero-carousel-item">
          <img
            className="d-block w-100 hero-img"
            src={pizza2}
            alt="Second slide"
          />
          <Carousel.Caption className="hero-caption">
            <h2 className="serif-font">Neapolitan Pizza</h2>
            <p>If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="hero-carousel-item">
          <img
            className="d-block w-100 hero-img"
            src={pizza3}
            alt="Third slide"
          />
          <Carousel.Caption className="hero-caption">
            <h2 className="serif-font">Neapolitan Pizza</h2>
            <p>If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="hero-carousel-item">
          <img
            className="d-block w-100 hero-img"
            src={pizza4}
            alt="Fourth slide"
          />
          <Carousel.Caption className="hero-caption">
            <h2 className="serif-font">Neapolitan Pizza</h2>
            <p>If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="hero-carousel-item">
          <img
            className="d-block w-100 hero-img"
            src={pizza5}
            alt="Fifth slide"
          />
          <Carousel.Caption className="hero-caption">
            <h2 className="serif-font">Neapolitan Pizza</h2>
            <p>If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Our Menu */}
      <Container className="py-5">
        <h2 className="text-white mb-4 serif-font">Our Menu</h2>
        <Row className="g-4">
          {pizzas.map((pizza) => (
            <Col md={6} lg={3} key={pizza.id}>
              <Card className="rounded-0 h-100 border-0 menu-card position-relative">
                {pizza.badge && <div className="badge-custom bg-warning text-dark fw-bold">{pizza.badge}</div>}
                <div className="card-img-container">
                  <Card.Img variant="top" src={pizza.image} className="rounded-0" />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold serif-font menu-title">{pizza.name}</Card.Title>
                  <Card.Text className={pizza.originalPrice ? "mb-4" : "mb-4 text-muted"}>
                    {pizza.originalPrice ? (
                      <>
                        <span className="text-decoration-line-through text-muted me-2">{pizza.originalPrice}</span>
                        <span className="text-warning fw-bold">{pizza.price}</span>
                      </>
                    ) : (
                      pizza.price
                    )}
                  </Card.Text>
                  <Button className="w-100 mt-auto rounded-0 buy-btn">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Book Your Table */}
      <Container className="py-5 mb-5">
        <h2 className="text-white text-center mb-4 serif-font">Book Your Table</h2>
        <Form className="booking-form mx-auto">
          <Row className="mb-3 g-3">
            <Col md={4}>
              <Form.Control type="text" placeholder="Your Name *" className="rounded-0 py-2" />
            </Col>
            <Col md={4}>
              <Form.Control type="email" placeholder="Your Email *" className="rounded-0 py-2" />
            </Col>
            <Col md={4}>
              <Form.Select className="rounded-0 py-2 text-muted">
                <option>Select a Service</option>
                <option value="1">Dine-in</option>
                <option value="2">Takeaway</option>
                <option value="3">Delivery</option>
              </Form.Select>
            </Col>
          </Row>
          <Form.Group className="mb-4">
            <Form.Control as="textarea" rows={6} placeholder="Please write your comment" className="rounded-0" />
          </Form.Group>
          <Button variant="warning" type="submit" className="rounded-0 text-white fw-bold px-4 py-2 bg-warning-custom border-0">
            Send Message
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
