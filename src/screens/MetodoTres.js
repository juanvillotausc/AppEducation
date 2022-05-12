import { View, Button, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';

const resultError = "¡Respuesta incorrecta! (1+1+1) + (1+1+1+1+1) = 8"
const resultErrorResta = "¡Respuesta incorrecta! (1+1+1+1) - (1+1) = 2";

const MetodoOne = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/Fondo.png')}
                resizeMode="cover"
                style={styles.image}
            >
                <View style={styles.view}>
                    <Text style={styles.text}>
                        Nivel Avanzado
                    </Text>
                </View>
            </ImageBackground>
            <View style={styles.boxButtons}>

                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>
                        Operacion
                    </Text>
                    <Text style={styles.text}>
                        (5 - 2) + (3 - 2)
                    </Text>
                    <Text style={styles.parrafo}>
                        Selecciona la opcion correcta:
                    </Text>
                    <View style={{ flex: 1, paddingvertical: 20, display: 'flex', justifyContent: 'space-around' }}>
                        <Button title="13" onPress={() => alert(resultError)} />
                        <Button title="4" onPress={() => alert('¡Respuesta correcta!')} />
                        <Button title="5" onPress={() => alert(resultError)} />
                    </View>

                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>
                        (5 x 6) / (5 x 2)
                    </Text>
                    <Text style={styles.parrafo}>
                        Selecciona la opcion correcta:
                    </Text>
                    <View style={{ flex: 1, paddingvertical: 20, display: 'flex', justifyContent: 'space-around' }}>
                        <Button title="10" onPress={() => alert(resultErrorResta)} />
                        <Button title="7" onPress={() => alert(resultErrorResta)} />
                        < Button title="3" onPress={() => alert('¡Respuesta correcta!')} />
                    </View>
                </View>

            </View>

            <Button title="Volver" onPress={() => navigation.goBack()} />

        </View>


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
        height: 150,

        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 28,
        lineHeight: 54,
        fontWeight: "bold",
        textAlign: "center"
    },
    boxButtons: {
        height: "70%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
});
export default MetodoOne;
