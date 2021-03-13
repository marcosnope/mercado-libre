import React from 'react';
import { search } from 'assets/images';
import classNames from 'classnames/bind';
import styles from './FormControl.module.scss';
import { useHistory } from 'react-router-dom';

const cx = classNames.bind(styles);

function FormControl() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/items?search=1');
  };

  return (
    <div className={cx('container')}>
      <input
        type="text"
        className={cx('form-control')}
        placeholder="Nunca dejes de buscar"
      />
      <span onClick={() => handleClick()}>
        <img src={search} alt="search" />
      </span>
    </div>
  );
}

export default FormControl;
