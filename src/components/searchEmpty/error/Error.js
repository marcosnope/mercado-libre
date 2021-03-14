import React from 'react';
import { Container } from 'react-bootstrap';
import { searchEmpty } from 'assets/images';
import classNames from 'classnames/bind';
import styles from './Error.module.scss';

const cx = classNames.bind(styles);

function SearchError() {
  return (
    <Container className={cx('container-search', 'mt-3 p-5')}>
      <div className={cx('content')}>
        <img src={searchEmpty} width="100" height="100" alt="search-empty" />
        <h4>No hay publicaciones que coincidan con tu búsqueda.</h4>
      </div>
    </Container>
  );
}

export default SearchError;
