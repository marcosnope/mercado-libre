import React from 'react';
import { search } from 'assets/images';
import classNames from 'classnames/bind';
import styles from './FormControl.module.scss';

const cx = classNames.bind(styles);

const FormControl = (_) => {
  return (
    <div className={cx('container')}>
      <input
        type="text"
        className={cx('form-control')}
        placeholder="Nunca dejes de buscar"
      />
      <span>
        <img src={search} alt="search" />
      </span>
    </div>
  );
};

export default FormControl;
