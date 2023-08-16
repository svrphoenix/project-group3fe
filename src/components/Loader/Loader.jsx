import { PropTypes } from 'prop-types';
import { ColorRing } from 'react-loader-spinner';
import { createPortal } from 'react-dom';

const loaderRoot = document.querySelector('#loader-root');

export const Loader = () => {
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
        backgroundColor: '#ffffff6d',
        backdropFilter: 'blur(1px)',
      }}
    >
      <ColorRing
        visible={true}
        height="90"
        width="90"
        ariaLabel="blocks-loading"
        colors={['#3e85f3', '#FDF608', '#3e85f3', '#3e85f3', '#3e85f3']}
      />
    </div>,
    loaderRoot
  );
};

Loader.propTypes = {
  size: PropTypes.string,
};
