import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Button
        title="Ir al metodo 1"
        onPress={() => navigation.navigate('Metodo1')}
      />
      <Button
        title="Ir al metodo 2"
        onPress={() => navigation.navigate('Metodo2')}
      />
    </View>
  );
};

const PrimerMetodo = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AppEducation" component={HomeScreen} />
      <Stack.Screen name="Metodo1" component={PrimerMetodo} />
      <Stack.Screen name="Metodo2" component={PrimerMetodo} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
