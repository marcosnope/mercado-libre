import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FormControl } from 'components';
import { logo } from 'assets/images';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header({ handleSubmit }) {
  return (
    <header>
      <Container>
        <Row>
          <Col xs={2} sm={2} md={1}>
            <div className={cx('box-logo')}>
              <Link to="/" className="d-flex">
                <img src={logo} alt="logotipo" width="60" />
              </Link>
            </div>
          </Col>
          <Col xs={10} sm={10} md={11}>
            <FormControl handleSubmit={handleSubmit} />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
