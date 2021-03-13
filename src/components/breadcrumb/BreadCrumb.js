import React from 'react';
import { Container } from 'react-bootstrap';
import { arrowRight } from 'assets/images';
import classNames from 'classnames/bind';
import styles from './BreadCrumb.module.scss';

const cx = classNames.bind(styles);

function BreadCrumb({ items }) {
  return (
    <Container>
      <nav className={cx('nav')}>
        <ul>
          {items.map((menu, index) => (
            <div key={`item-${index}`}>
              <a href="/">{menu.title}</a>
              {index < items.length - 1 && (
                <img
                  src={arrowRight}
                  width="10"
                  height="10"
                  alt="arrow-right"
                />
              )}
            </div>
          ))}
        </ul>
      </nav>
    </Container>
  );
}

export default BreadCrumb;
