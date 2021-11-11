import React from 'react';
import logo from '../../assets/logo.png';
import stars from '../../assets/stars.jpeg';

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${stars})`,
        backgroundColor: 'black',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }}
    >
      <img
        src={logo}
        alt="star wars logo"
        style={{
          height: '200px',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '500px',
        }}
      />
    </div>
  );
};

export default Header;
