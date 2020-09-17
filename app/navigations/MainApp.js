import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import config from '../config';
import { Home, AddEditToDo } from '../screens';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          headerTintColor: config.colors.black,
          headerTitleStyle: {
            color: config.colors.black,
            alignSelf: 'center',
          },
          headerBackTitle: 'Back',
        };
      }}>
      <Stack.Screen
        name={config.routes.HOME}
        component={Home}
        options={{ title: config.strings.HOME }}
      />
      <Stack.Screen
        name={config.routes.ADD_EDIT_TO_DO}
        component={AddEditToDo}
        options={{ title: config.strings.ADD_EDIT_NOTES }}
      />
    </Stack.Navigator>
  );
};

export default MainApp;
