import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home} from './Home/pages/Home';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {DataProvider} from './context/DataContext';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  const currentTheme = useColorScheme();
  const theme = currentTheme === 'dark' ? DarkTheme : DefaultTheme;
  return (
    <DataProvider>
      <NavigationContainer theme={theme}>
        <AppStack />
      </NavigationContainer>
    </DataProvider>
  );
};

function App(): React.JSX.Element {
  return <Router />;
}

export default App;
