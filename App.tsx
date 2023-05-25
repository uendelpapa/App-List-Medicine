import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import OtherScreen from './src/screens/ProductPetScreen';
import ProductsScreen from './src/screens/ProductsGrandesScreen';
// import Teste from './src/screens/Teste';
import { Text, View } from 'react-native';



const Stack = createStackNavigator();

const App: React.FC<any> = () => {
  return (
    
    <NavigationContainer>
  
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Other" component={OtherScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="Products" component={ProductsScreen}  options={{headerShown:false}}/>
        {/* <Stack.Screen name="Teste" component={Teste}  /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
