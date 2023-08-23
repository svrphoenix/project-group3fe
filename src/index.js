import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './styles.css';

import { store, persistor } from 'redux/store';
import configureAxios from 'api/setupInterceptors';
import App from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { CalendarProvider } from 'pages/CalendarPage/CalendarProvider';
import './components/LangSwitcher/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/project-group3fe">
        <CalendarProvider>
          <App />
        </CalendarProvider>
        <GlobalStyle />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);

configureAxios(store);
