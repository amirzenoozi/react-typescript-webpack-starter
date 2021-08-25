import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './app';
import 'src/helpers/translate-helper';

import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [ ...jssPreset().plugins, rtl() ] });

ReactDOM.render(
    <Provider store={store}>
      <StylesProvider jss={jss}>
        <App />
      </StylesProvider>
    </Provider>,
    document.getElementById('root')
);
