import * as React from 'react';
import thunk from 'redux-thunk';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import counter from './src/Redux/reducers/counterRedux'
import reducerGetProducto from './src/Redux/reducers/reducerGetProduct'
import reducerGetDepartment from './src/Redux/reducers/reducerGetDepartment'
import reducerGetCategory from './src/Redux/reducers/reducerGetCategory'
import reducerSetProduct from './src/Redux/reducers/reducerSetProduct'
import Home from './src/Views/Home'
import AddProduct from './src/Views/AddProduct';

// A very simple store
const appReducer = combineReducers({

  getProduct: reducerGetProducto,
  getDepartmet: reducerGetDepartment,
  getCategory: reducerGetCategory,
  setProduct: reducerSetProduct
});
let store = createStore(appReducer, applyMiddleware(thunk));


let RootStack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{
          headerShown: false
        }}>
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen name="AddProduct" component={AddProduct} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});