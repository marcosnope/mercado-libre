import React from 'react';
import { Container } from 'react-bootstrap';
import { searchEmpty } from 'assets/images';
import classNames from 'classnames/bind';
import styles from './SearchEmpty.module.scss';

const cx = classNames.bind(styles);

function SearchEmpty() {
  return (
    <Container className={cx('container-search', 'mt-3 p-5')}>
      <div className={cx('content')}>
        <img src={searchEmpty} width="100" height="100" alt="search-empty" />
        <h4>Escribe en el buscador lo que quieres encontrar.</h4>
      </div>
    </Container>
  );
}

export default SearchEmpty;
