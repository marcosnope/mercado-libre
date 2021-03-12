import React from 'react';
import { search } from 'assets/images';

const FormControl = (_) => {
  return (
    <div
      style={{
        display: 'flex',
        margin: '12px 0px',
        boxShadow: '0px 2px 6px 0px rgb(0 0 0 / 10%)',
        borderRadius: '5px',
      }}
    >
      <input
        type="text"
        style={{
          width: '100%',
          padding: '0px 20px',
          border: 'none',
          outline: 'none',
          borderRadius: '5px 0px 0px 5px',
        }}
        placeholder="Nunca dejes de buscar"
      />
      <span
        style={{
          backgroundColor: '#EEEEEE',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          padding: '12px',
          borderRadius: '0px 5px 5px 0px',
        }}
      >
        <img src={search} alt="search" />
      </span>
    </div>
  );
};

export default FormControl;
