import React, { Component } from 'react';
import { Link } from 'react-router';
import { Container, Row, Col } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row className="ground-nav">
            <Col >
              <Link to="/home" className="nav-title">STEAMPACK</Link>
            </Col>
            <Col className="make-play">Game Register</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Header;
