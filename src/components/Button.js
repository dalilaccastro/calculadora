import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width/4, //altura será o tamanho da largura dividido por 4
        width: Dimensions.get('window').width/4, //largura basea-se em width, ambos ficam iguais e proporcionais
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        color: '#FFF',
        backgroundColor: '#FA8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2, //o botão terá o tamanho de 2 botões
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3, //o botão terá o tamanho de 3 botões
    }
})

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble) //se double verdadeiro, usa style buttonDouble
    if (props.triple) stylesButton.push(styles.buttonTriple) //se triple verdadeiro, usa style buttonTriple
    if (props.operation) stylesButton.push(styles.operationButton) //se operation verdadeiro, usa style operationButton
    return (
        //a arrow function, em onClick, chamará o label inserido em cada botão do App.js
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}