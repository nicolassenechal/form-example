import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
exports.wrapRootComponent = Root => {
    return () => (
        <Provider store={store}>
            <Root />
        </Provider>
    );
};
