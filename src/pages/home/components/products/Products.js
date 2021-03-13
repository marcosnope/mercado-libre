import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { shipping } from 'assets/images';
import classNames from 'classnames/bind';
import style from './Products.module.scss';

const cx = classNames.bind(style);

const Products = ({ items }) => {
  return (
    <Container className={cx('content')}>
      {items.map((product, index) => (
        <Row key={`product-${index}`} className={cx('card')}>
          <Col className="pl-0 py-3 d-flex" xs={10} sm={10} md={10}>
            <div className={cx('box-image')}>
              <img src={product.image} alt="product" />
            </div>
            <div className={cx('box-description')}>
              <div>
                <h4>{product.price}</h4>
                <img src={shipping} alt="shipping" width="20" height="20" />
              </div>
              <p>
                {product.description}
                <br />
                {product.aditional}
              </p>
            </div>
          </Col>
          <Col className="pl-0 py-3 d-flex" xs={2} sm={2} md={2}>
            <div className={cx('box-information')}>
              <p>{product.place}</p>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Products;
