import { PropTypes } from 'prop-types';
import { ColorRing } from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import React, { useEffect, useState } from 'react';

const loaderRoot = document.querySelector('#loader-root');

export const Loader = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundImage: `var(--loader-Gradient)`,
        backdropFilter: 'blur(1px)',
      }}
    >
      <ColorRing
        visible={true}
        height={viewportWidth < 768 ? '90' : '120'}
        width={viewportWidth < 768 ? '90' : '120'}
        ariaLabel="blocks-loading"
        colors={['#3E85F3', '#b1ddff', '#FFD2DD', '#3E85F3', '#DCEBF7']}
      />
    </div>,
    loaderRoot
  );
};

Loader.propTypes = {
  size: PropTypes.string,
};
