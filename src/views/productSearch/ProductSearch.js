import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from 'context/store';
import { Header, BreadCrumb, SearchEmpty } from 'components';
import Products from './components/products/Products';
import { productsSearch } from 'context/products/actions';

function ProductSearch(props) {
  const { location } = props;
  const productSearch = new URLSearchParams(location.search).get('search');
  const history = useHistory();
  const [{ products }, dispatch] = useStateValue();

  const getProduct = async (search) => {
    await productsSearch(dispatch, search);
  };

  useEffect(() => {
    getProduct(productSearch); // eslint-disable-next-line
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const searchText = event.target[0].value;
    if (searchText) {
      await getProduct(searchText);
      history.replace(`/items?search=${searchText}`);
    }
  };

  const productsList = () => (
    <section>
      <BreadCrumb items={products.categories} />
      <Products items={products.items} />
    </section>
  );

  return (
    <Fragment>
      <Header handleSubmit={handleSubmit} />
      {productSearch ? products.items && productsList() : <SearchEmpty />}
    </Fragment>
  );
}

export default ProductSearch;
