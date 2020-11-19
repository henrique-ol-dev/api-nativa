
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, Text, FlatList, Button } from 'react-native';
import * as Contacts from 'expo-contacts';

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

const itemContato = ({ nome, id }) => {
    return (
        <View style={styles.item}>
            <Text>{nome}</Text>
            <Button name="btnId" onPress={() => alert(id)} title="Id do Item"/>
        </View>
    )
}

const Contatos = () => {
    const [contatos, setContatos] = useState([]);

    //Ciclo de vida, assim que aparece a página passa pelo useEffect
    useEffect(() => {
        (async () => {

            //Requisita a permissão do usuário para obter os contatos
            const { status } = await Contacts.requestPermissionsAsync();
            //Permissão concluída
            if (status === 'granted') {
                //Pega todos os contatos
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Emails],
                });

                //Verifica se existe contatos cadastrados
                if (data.length > 0) {
                    setContatos(data);
                }
            }
        })();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <ItemContato nome={item.nome} id={item.id} />
        )
    }
    return (
        <View style={styles.container}>
            <Text> Contatos </Text>
            <FlatList
                data={contatos}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}
export default Contatos;