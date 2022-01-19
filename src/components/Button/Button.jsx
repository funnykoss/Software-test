import React from 'react';
import s from './Button.module.css';

function Button({
  width = '180px',
  type = 'button',
  inverted = false,
}) {
  return (
    <div>
      <button
        type={type}
        className={inverted ? s.buttonInverted : s.button}
        style={{ width: `${width}` }}
      >
    Здати в аренду +
      </button>
    </div>
  );
}

export default Button;
