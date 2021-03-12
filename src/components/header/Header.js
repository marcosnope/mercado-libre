import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FormControl } from 'components';
import { logo } from 'assets/images';

const Header = (_) => {
  return (
    <Container>
      <Row>
        <Col xs={2} sm={2} md={1}>
          <div
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={logo} alt="logotipo" width="60" />
          </div>
        </Col>
        <Col xs={10} sm={10} md={11}>
          <FormControl />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
