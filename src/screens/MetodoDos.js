import { View, Button, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const resultError = "¡Respuesta incorrecta! (4+4+4) = 12"
const resultErrorResta = "¡Respuesta incorrecta! (15/5 -> 3x5 -> 5+5+5 ) = 15";


const MetodoDos = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/Fondo.png')}
                resizeMode="cover"
                style={styles.image}
            >
                <View style={styles.view}>
                    <Text style={styles.text}>
                        Suma y Resta
                    </Text>
                </View>
            </ImageBackground>
            <View style={styles.boxButtons}>

                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>
                        Operacion = 4 x 3
                    </Text>
                    <Text style={styles.parrafo}>
                        Selecciona la opcion correcta:
                    </Text>
                    <View style={{ flex: 1, paddingvertical: 20, display: 'flex', justifyContent: 'space-around' }}>
                        <Button title="3" onPress={() => alert(resultError)} />
                        <Button title="12" onPress={() => alert('¡Respuesta correcta!')} />
                        <Button title="45" onPress={() => alert(resultError)} />
                    </View>

                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>
                        Operacion = 15 / 5
                    </Text>
                    <Text style={styles.parrafo}>
                        Selecciona la opcion correcta:
                    </Text>
                    <View style={{ flex: 1, paddingvertical: 20, display: 'flex', justifyContent: 'space-around' }}>
                        <Button title="14" onPress={() => alert(resultErrorResta)} />
                        <Button title="3" onPress={() => alert('¡Respuesta correcta!')} />
                        <Button title="6" onPress={() => alert(resultErrorResta)} />
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
        lineHeight: 84,
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

export default MetodoDos;
