import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
console.log('browserr')
exports.wrapRootComponent = Root => {
    return () => (
        <Provider store={store}>
            <Root />
        </Provider>
    );
};
