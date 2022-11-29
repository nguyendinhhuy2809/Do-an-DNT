import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//Screens
import MapScreen from './src/Screens/MapScreen';
import Home from './src/Screens/Home';
import { KeyboardAvoidingView, Platform } from 'react-native';





 export default function App () {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
          behavior={Platform.OS ==="android" ? "padding": "height"}
          style={{flex : 1}}
          keyboardVerticalOffset={Platform.OS ==="android" ? -64 : 0}
          >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown: false}} />
        </Stack.Navigator>
        </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
    
  );
}

