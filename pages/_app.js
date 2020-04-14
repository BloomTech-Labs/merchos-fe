import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import initStore from '../store/initStore';
import { PersistGate } from 'redux-persist/integration/react';

import Toasts from '../components/Toasts';
import AuthModal from '../components/auth/AuthModal'

import { GlobalStyle } from '../styles/GlobalStyles';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import '../styles/GridStyles.css';
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return pageProps;
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <PersistGate persistor={store.__persistor} loading={null}>
          <GlobalStyle />
          <AuthModal />
          <Component {...pageProps} />
          <Toasts />
        </PersistGate>
      </Provider>
    );
  }
}

export default withRedux(initStore)(MyApp);
