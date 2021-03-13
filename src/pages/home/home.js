import React, { Fragment } from 'react';
import { Header, BreadCrumb } from 'components';
import Products from './components/products/Products';

const migaDePan = [
  { title: 'Electronica, Audio y Video' },
  { title: 'iPod' },
  { title: 'Reproductores' },
  { title: 'iPod touch' },
  { title: '32 GB' },
];

const products = [
  {
    price: '$ 1.980',
    image: 'https://http2.mlstatic.com/D_677004-MLA31971773611_082019-O.jpg',
    description: 'Apple Ipod Touch 5g 16gb Negro Igual a Nuevo',
    aditional: 'Completo Unico!',
    place: 'Capital Federal',
  },
  {
    price: '$ 1.980',
    image: 'https://http2.mlstatic.com/D_676532-MLA45077301248_032021-I.jpg',
    description: 'Apple Ipod Touch 5g 16gb Negro Igual a Nuevo',
    aditional: 'Completo Unico!',
    place: 'Capital Federal',
  },
  {
    price: '$ 1.980',
    image: 'https://http2.mlstatic.com/D_811032-MLA26615754978_012018-I.jpg',
    description: 'Apple Ipod Touch 5g 16gb Negro Igual a Nuevo',
    aditional: 'Completo Unico!',
    place: 'Capital Federal',
  },
];

const Home = () => {
  return (
    <Fragment>
      <Header />
      <section>
        <BreadCrumb items={migaDePan} />
        <Products items={products} />
      </section>
    </Fragment>
  );
};

export default Home;
