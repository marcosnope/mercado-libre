import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Header, BreadCrumb } from 'components';
import { Container, Row, Col } from 'react-bootstrap';
import { useStateValue } from 'context/store';
import { productsId } from 'context/products/actions';
import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';

const cx = classNames.bind(styles);

// const migaDePan = [
//   { title: 'Electronica, Audio y Video' },
//   { title: 'iPod' },
//   { title: 'Reproductores' },
//   { title: 'iPod touch' },
//   { title: '32 GB' },
// ];

const product = {
  image: 'https://http2.mlstatic.com/D_677004-MLA31971773611_082019-O.jpg',
  caracteristic: '',
  name: '',
  price: '',
  description: '',
};

function DetailProduct() {
  const { id } = useParams();
  const history = useHistory();
  const [{ products }, dispatch] = useStateValue();

  const getProductId = async (idProduct) => {
    await productsId(dispatch, idProduct);
  };

  useEffect(() => {
    getProductId(id); // eslint-disable-next-line
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchText = event.target[0].value;

    if (searchText) {
      history.push(`/items?search=${searchText}`);
    }
  };

  return (
    <section>
      <Header handleSubmit={handleSubmit} />
      {/* <BreadCrumb items={products.breadCrumb} /> */}
      <Container>
        <Container fluid className={cx('content')}>
          <Row>
            <Col xs={8} sm={8} md={8} className="p-0">
              <div className={cx('box-image')}>
                <img id="image-product" src={product.image} alt="product" />
              </div>
            </Col>
            <Col xs={4} sm={4} md={4} className="p-0">
              <div className={cx('box-price')}>
                <p>Nuevo 234 vendidos</p>
                <h4 id="title-product">Deco Reverse Sobrero Oxford</h4>
                <h1 id="price-product">$ 1.980</h1>
                <button>Comprar</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={8} className="p-0">
              <div className={cx('box-description')}>
                <h3>Descripción del producto</h3>
                <p id="description-product">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
                  in massa egestas mollis varius; dignissim elementum. Mollis
                  tincidunt mattis hendrerit dolor eros enim, nisi ligula
                  ornare. Hendrerit parturient habitant pharetra rutrum gravida
                  porttitor eros feugiat. Mollis elit sodales taciti duis
                  praesent id. Consequat urna vitae morbi nunc congue.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default DetailProduct;
