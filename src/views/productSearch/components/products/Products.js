import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { shipping } from 'assets/images';
import classNames from 'classnames/bind';
import style from './Products.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Products({ items }) {
  return (
    <Container className="mb-5">
      <Container fluid className={cx('content')}>
        {items.map(
          (product, index) =>
            index < 4 && (
              <Row key={`product-${index}`} className={cx('card')}>
                <Col className="pl-0 py-3" xs={10} sm={10} md={10}>
                  <Link to={`/items/${index}`} className="d-flex">
                    <div className={cx('box-image')}>
                      <img src={product.picture} alt="product" />
                    </div>
                    <div className={cx('box-description')}>
                      <div>
                        <h4>{product.price.amount}</h4>
                        {product.free_shipping && (
                          <img
                            src={shipping}
                            alt="shipping"
                            width="20"
                            height="20"
                          />
                        )}
                      </div>
                      <p>{product.title}</p>
                    </div>
                  </Link>
                </Col>
                <Col className="pl-0 py-3 d-flex" xs={2} sm={2} md={2}>
                  <div className={cx('box-information')}>
                    <p>{product.place}</p>
                  </div>
                </Col>
              </Row>
            )
        )}
      </Container>
    </Container>
  );
}

export default Products;
