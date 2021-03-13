import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from 'context/store';
import { Header, BreadCrumb, SearchEmpty } from 'components';
import Products from './components/products/Products';

const migaDePan = [
  { title: 'Electronica, Audio y Video' },
  { title: 'iPod' },
  { title: 'Reproductores' },
  { title: 'iPod touch' },
  { title: '32 GB' },
];

function ProductSearch(props) {
  const { location } = props;
  const productSearch = new URLSearchParams(location.search).get('search');
  const history = useHistory();
  const [{ products }] = useStateValue();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchText = event.target[0].value;

    if (searchText) {
      history.push(`/items?search=${searchText}`);
    }
  };

  const productsList = (productSearch) => (
    <section>
      <BreadCrumb items={migaDePan} />
      <Products items={products} />
    </section>
  );

  return (
    <Fragment>
      <Header handleSubmit={handleSubmit} />
      {productSearch ? productsList(productSearch) : <SearchEmpty />}
    </Fragment>
  );
}

export default ProductSearch;
