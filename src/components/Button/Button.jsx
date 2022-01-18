import React from 'react';
import s from './Button.module.css';

function Button({
 
  border = '#ff700b',
  width = '200px',
  type = 'button',
  inverted = false,
}) {
  return (
    <div>
      <button
        type={type}
        className={inverted ? s.buttonInverted : s.button}
        style={{ border: `1px solid ${border}`, width: `${width}` }}
      >
    Здати в аренду +
      </button>
    </div>
  );
}

export default Button;
