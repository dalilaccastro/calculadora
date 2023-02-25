import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native'
import Button from './src/components/Button'
import Display from './src/components/Display';

//estado inicial da calculadora
const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0 , 0],
  current: 0,
}

export default class App extends Component {
  state = { ...initialState }//copia as informações do objeto initialState para state

  //temporária : para quando setar valor, ser substituído o state de displayValue por n - AQUI INCLUI O . -
  addDigit = n => {
    //limpa o display se for zero (ex: acrescenta 7, não fica 07 e sim 7) ou se this.state.clearDisplay for verdadeiro
    const clearDisplay = this.state.displayValue === '0'
      || this.state.clearDisplay

    //se não vai limpar display e se já tem um ponto, não retorna nada - assim não acrescenta outro ponto
    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
      return
    }
    //seta o que está no display para ser o currentValue (ou se for '')
    const currentValue = clearDisplay ? '' : this.state.displayValue
    //dessa forma, soma o currentValue ao que é digitado. Aqui há uma concatenação, pois são strings
    const displayValue = currentValue + n
    //seta o estado para a informação em displayValue e não limpa o display
    this.setState({ displayValue, clearDisplay: false })
  
    if (n !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({ values })
    }

  }

  //limpará a memória da calculadora quando clicar no AC, voltando pro initialState
  clearMemory = () => { 
    this.setState({ ...initialState })
  }

  //ao clicar nas operações / , * , - , + e = 
  setOperation = operation => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true }) //o current aqui é para entrar no índice 1 do array
    } else {
      const equals = operation === '='
      const values = [...this.state.values]
      try {
        values[0] = 
        eval (`${values[0]} ${this.state.operation} ${values[1]}`) //faz o cálculo dentro do template string
      } catch (e) {
        values[0] = this.state.values[0]
      }
      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`, //colocando template string evita que seja identificado como number, o que causaria erro
        operation: equals ? null : operation, //apertou no igual, se tiver algo, faz a operação 
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      })
    }

  }

render() {
  return (
    //monta os botões da calculadora 
    //para cada botão necessário foi identificado se era double , triple ou operation
    //em cada botão chama clearMemory, addDigit ou setOperation, usando o label chamado função anônima em Button.js
    <View style={styles.container}>
      <Display value={this.state.displayValue} />
      <View style={styles.buttons}> 
        <Button label='AC' triple onClick={this.clearMemory} />
        <Button label='/' operation onClick={this.setOperation} />
        <Button label='7' onClick={this.addDigit}/>
        <Button label='8' onClick={this.addDigit}/>
        <Button label='9' onClick={this.addDigit}/>
        <Button label='*' operation onClick={this.setOperation}/>
        <Button label='4' onClick={this.addDigit}/>
        <Button label='5' onClick={this.addDigit}/>
        <Button label='6' onClick={this.addDigit}/>
        <Button label='-' operation onClick={this.setOperation}/>
        <Button label='1' onClick={this.addDigit}/>
        <Button label='2' onClick={this.addDigit}/>
        <Button label='3' onClick={this.addDigit}/>
        <Button label='+' operation onClick={this.setOperation}/>
        <Button label='0' double onClick={this.addDigit}/>
        <Button label='.' onClick={this.addDigit}/>
        <Button label='=' operation onClick={this.setOperation}/>
      </View>
    </View>
  );
}
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
  }
)