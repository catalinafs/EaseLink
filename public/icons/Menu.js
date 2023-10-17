import * as React from 'react';

const Menu = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.width || 30}
    height={props.height || 30}
    style={{
      fill: props.fill,
    }}
    viewBox='0 0 256 256'
    {...props}
  >
    <path
      strokeMiterlimit={10}
      d='M56 48a4 4 0 0 1 0 8H16a4 4 0 0 1 0-8h40zm0-16a4 4 0 0 1 0 8H16a4 4 0 0 1 0-8h40zm0-16a4 4 0 0 1 0 8H16a4 4 0 0 1 0-8h40z'
      fontFamily='none'
      fontSize='none'
      fontWeight='none'
      style={{
        mixBlendMode: 'normal',
      }}
      textAnchor='none'
      transform='matrix(5.29778 0 0 5.29778 -62.72 -62.72)'
    />
  </svg>
)

export default Menu;