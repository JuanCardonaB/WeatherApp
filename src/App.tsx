import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home} from './Home/pages/Home';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {useColorScheme} from 'react-native';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const Router = () => {
  const currentTheme = useColorScheme();
  const theme = currentTheme === 'dark' ? DarkTheme : DefaultTheme;
  return (
    <NavigationContainer theme={theme}>
      <AppStack />
    </NavigationContainer>
  );
};

function App(): React.JSX.Element {
  return <Router />;
}

export default App;
