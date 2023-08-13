import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'redux/store';
import configureAxios from 'api/setupInterceptors';
import App from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/project-group3fe">
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);

configureAxios(store);
