import * as React from 'react';
import { Button, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MetodoOne from './src/screens/MetodoUno';
import MetodoDos from './src/screens/MetodoDos';
import MetodoTres from './src/screens/MetodoTres';

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={styles.container}>
      <ImageBackground
        source={require('./src/assets/images/Fondo.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.view}>

          <Text style={styles.text}>
            AppEducation
          </Text>
          <Text style={styles.parrafo}>
            Selecciona el grado para ir al metodo de aprendizaje.
          </Text>
          <View style={styles.boxButtons}>

            <View style={{ width: '80%', paddingVertical: 20 }}>
              <Button
                style={styles.button}
                title="Grado 1-2"
                onPress={() => navigation.navigate('Metodo1')}
              />
            </View>
            <View style={{ width: '80%', paddingVertical: 20 }}>
              <Button
                style={styles.button}
                title="Grado 3-4"
                onPress={() => navigation.navigate('Metodo2')}
              />
            </View>
            <View style={{ width: '80%', paddingVertical: 20 }}>
              <Button
                style={styles.button}
                title="Grado 5"
                onPress={() => navigation.navigate('Metodo3')}
              />
            </View>
          </View>
        </View>

      </ImageBackground>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090034"
  },
  parrafo: {
    color: "white"
  },
  view: {
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.54)"
  },
  image: {
    height: "100%",

  },
  text: {
    color: "white",
    fontSize: 28,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center"
  },
  boxButtons: {
    height: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

});

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="AppEducation" component={HomeScreen} />
      <Stack.Screen name="Metodo1" component={MetodoOne} />
      <Stack.Screen name="Metodo2" component={MetodoDos} />
      <Stack.Screen name="Metodo3" component={MetodoTres} />
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
