import React from 'react';
import { Header } from 'components';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchText = event.target[0].value;

    if (searchText) {
      history.push(`/items?search=${searchText}`);
    }
  };
  return <Header handleSubmit={handleSubmit} />;
}

export default Home;
