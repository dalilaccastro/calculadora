# 📱 Calculadora iOS Clone

Projeto de uma calculadora funcional desenvolvida com **React Native** e **TypeScript**, inspirada no design da calculadora do iOS. Criada com foco educacional, o projeto visa reforçar conhecimentos em lógica matemática, interface amigável e estruturas condicionais em programação.

---

## 🚀 Funcionalidades

- Interface responsiva inspirada no layout do iOS  
- Operações básicas: adição, subtração, multiplicação e divisão  
- Lógica de substituição de operadores  
- Limpeza e manipulação de dígitos (AC, ponto decimal, etc.)  
- Organização do código em componentes reutilizáveis

---

## 🧠 Estrutura do Projeto

O projeto é composto por componentes reutilizáveis que controlam tanto a **interface** quanto a **lógica matemática** da calculadora:

- `Button`: componente reutilizável para os botões da calculadora  
- `CalculatorLogic`: funções responsáveis pelas operações matemáticas e controle do estado

### 🔢 Exemplo de função

```ts
function addDigit(digit: string) {
  if (displayValue === '0') {
    setDisplayValue(digit);
  } else {
    setDisplayValue(displayValue + digit);
  }
}
```

---

## 🛠️ Tecnologias Utilizadas

- React Native  
- TypeScript  
- Styled Components  
- Expo  

---

## 📦 Instalação

```bash
git clone https://github.com/dalilaccastro/calculadora.git
cd calculadora
npm install
npx expo start
```

---

## 👩‍💻 Autora

Desenvolvido por [@dalilaccastro](https://github.com/dalilaccastro)

---

# 📱 iOS Calculator Clone

A fully functional calculator built with **React Native** and **TypeScript**, inspired by the design of Apple's iOS calculator. This project was created for educational purposes, focusing on logic building, clean UI, and state management in mobile development.

---

## 🚀 Features

- Responsive interface based on the iOS layout  
- Basic operations: addition, subtraction, multiplication, division  
- Operator substitution logic  
- Digit control (AC, decimal point, etc.)  
- Clean component-based architecture

---

## 🧠 Project Structure

The project is built using modular components to separate logic and UI responsibilities:

- `Button`: reusable component for calculator keys  
- `CalculatorLogic`: functions responsible for math operations and state updates  

### 🔢 Example Function

```ts
function addDigit(digit: string) {
  if (displayValue === '0') {
    setDisplayValue(digit);
  } else {
    setDisplayValue(displayValue + digit);
  }
}
```

---

## 🛠️ Technologies Used

- React Native  
- TypeScript  
- Styled Components  
- Expo  

---

## 📦 Installation

```bash
git clone https://github.com/dalilaccastro/calculadora.git
cd calculadora
npm install
npx expo start
```

---

## 👩‍💻 Author

Developed by [@dalilaccastro](https://github.com/dalilaccastro)
