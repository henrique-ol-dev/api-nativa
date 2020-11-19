import React from 'react';
import { Text, View, StyleSheet, Button, StatusBar } from 'react-native';
import * as Speech from 'expo-speech';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    item : {
        backgroundColor : "gray",
        padding : 20,
        marginVertical : 8,
        marginHorizontal : 16

    }
})

const TextToSpeech = () => {
    const speak = () => {
        Speech.speak("Boa tarde turma, espero que estejam gostando da aula");
    }

    return(
        <View style={styles.container}>
            <Button title="Pressione aqui para falar" onPress={() => speak()} />
        </View>
    );
}

export default TextToSpeech;