import React, { useEffect, useState } from 'react';
import { Header } from 'components';
import { useHistory } from 'react-router-dom';
import { useStateValue } from 'context/store';
import { INITIALIZE } from 'context/products/constants';

function Home() {
  const history = useHistory();
  const [, dispatch] = useStateValue();
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchText = event.target[0].value;
    if (searchText) {
      history.push(`/items?search=${searchText}`);
    }
  };

  const initializeStore = (_) => {
    dispatch({
      type: INITIALIZE,
      products: null,
    });
  };

  useEffect(() => {
    initializeStore(); // eslint-disable-next-line
  }, []);

  return (
    <Header
      handleSubmit={handleSubmit}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
  );
}

export default Home;
