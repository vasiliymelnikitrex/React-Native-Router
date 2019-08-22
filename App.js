/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @flow
 */

import React, {Fragment} from 'react';
import {Provider} from 'react-redux';

import Routes from './src/routes';
import store from './src/store';

export default () => (
  <Fragment>
    <Provider store={store}>
      <Routes />
    </Provider>
  </Fragment>
);
