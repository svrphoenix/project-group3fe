import React, { useState } from 'react';

export const CloseIconSvg = ({ color, size, onClick, hoverColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      fill={isHovered ? hoverColor : color}
      stroke={isHovered ? hoverColor : color}
      width={size}
      height={size}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: 'pointer',
        position: 'absolute',
        top: '14px',
        right: '14px',
        transition: 'fill 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <use href={process.env.PUBLIC_URL + '/sprite.svg#icon-x-close'} />
    </svg>
  );
};
