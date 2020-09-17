import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StorybookUIRoot from '../storybook';
import config from './config';
import RootNavigator from './navigations';

const App = () => {
  /* storybookEnabled to be set in localConfig.js */
  if (config.storybookEnabled) {
    return <StorybookUIRoot />;
  }
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
