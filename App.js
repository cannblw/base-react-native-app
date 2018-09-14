import React from 'react';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import {
  Root,
  StyleProvider
} from 'native-base';

import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk));

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import RootNavigator from './navigators/RootNavigator'

export default class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (
      <Root>
        <StyleProvider style={getTheme(material)}>
          <Provider store={ store }>
            <RootNavigator />
          </Provider>
        </StyleProvider>
      </Root>
    );
  }
}
