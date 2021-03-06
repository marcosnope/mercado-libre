import React from 'react';
import { search } from 'assets/images';
import classNames from 'classnames/bind';
import styles from './FormControl.module.scss';

const cx = classNames.bind(styles);

function FormControl({ handleSubmit, searchValue, setSearchValue }) {
  return (
    <form id="form-product" onSubmit={handleSubmit}>
      <div className={cx('container')}>
        <input
          id="input-search"
          type="text"
          className={cx('form-control')}
          placeholder="Nunca dejes de buscar"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button type="submit" form="form-product">
          <img src={search} alt="search" width="18" height="18" />
        </button>
      </div>
    </form>
  );
}

export default FormControl;
