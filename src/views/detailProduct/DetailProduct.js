import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Header, BreadCrumb, SearchError } from 'components';
import { Container, Row, Col } from 'react-bootstrap';
import { useStateValue } from 'context/store';
import { productsId, productsSearch } from 'context/products/actions';
import { formatterPeso } from 'utils/formats';
import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';

const cx = classNames.bind(styles);

function DetailProduct(props) {
  const history = useHistory();
  const { id } = useParams();
  const [{ products }, dispatch] = useStateValue();
  const { location } = props;
  const productSearch = new URLSearchParams(location.search).get('search');
  const [searchValue, setSearchValue] = useState(productSearch || '');

  const getProductId = async (idProduct) => {
    await productsId(dispatch, idProduct);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const searchText = event.target[0].value;

    if (searchText) {
      await productsSearch(dispatch, searchValue);
      history.push(`/items?search=${searchText}`);
    }
  };

  useEffect(() => {
    getProductId(id); // eslint-disable-next-line
  }, []);

  const renderContenProduct = (_) => {
    const {
      productId: { breadcrumb, item },
    } = products;
    return Object.keys(item).length ? (
      <>
        <BreadCrumb items={breadcrumb} />
        <Container>
          <Container fluid className={cx('content')}>
            <Row>
              <Col xs={12} sm={12} md={8} className="p-0">
                <div className={cx('box-image')}>
                  <img id="image-product" src={item.picture} alt="product" />
                </div>
              </Col>
              <Col xs={12} sm={12} md={4} className="p-0">
                <div className={cx('box-price')}>
                  <p>{item.condition}</p>
                  <h4 id="title-product">{item.title}</h4>
                  <h1 id="price-product">
                    <span>$</span>
                    {formatterPeso.format(item.price.amount)}
                  </h1>
                  <button>Comprar</button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={8} className="p-0">
                <div className={cx('box-description')}>
                  <h3>Descripción del producto</h3>
                  <p id="description-product">{item.description}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </>
    ) : (
      <SearchError />
    );
  };

  return (
    products && (
      <section>
        <Header
          handleSubmit={handleSubmit}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {products.productId && renderContenProduct()}
      </section>
    )
  );
}

export default DetailProduct;
