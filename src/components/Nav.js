import React from 'react';

const Nav = ({ page })=> {
  console.log(page);
  const pages = ['home', 'products'];
  const lis = pages.map( (name) => {
    return (
        <li key={ name } className={ page === name ? 'active': '' }>
          <a href={ name === 'home' ? '#' : `#${name}`}>{ name }</a>
        </li>
    );
  });
  return (
      <ul className='nav nav-tabs' style={ { marginBottom: '10px' } }>
        { lis }
      </ul>
  );
};

export default Nav;
