Calculadora

Este projeto apresenta uma calculadora criada para fins estudantis baseada no Front-End da Calculadora do iOS.

Para esse projeto, foram criados: 

-- Button.js - define a aparência dos botões, sendo eles 
    - button: botões simples utilizado nos números em geral e '.';
    - operationButton: botões das operações '+', '-','/','*','=';
    - buttonDouble: botão '0' que apresenta 2 vezes o tamanho do button; e
    - buttonTriple: botão 'AC' que apresenta 3 vezes o tamanho do button.

-- Display.js - cria o Display , onde aparecerão os números inseridos pelo usuário.

-- App.js   - aplicação de fato das funções da Calculadora, onde o usuário:
            1- insere os números que ficam na primeira posição, 
            2- escolhem a operação ('+', '-', '/', '*'), 
            3- isere o próximo número e finaliza com '=';
            4- limpa o display em 'AC';

            - import de Button.js e Display.js;
            - definido estado inicial em initialState como 0 aos cálculos. Será utilizado em state e em clearMemory no export;

            Funções utilizadas:
            - addDigit: 
                    - limpa o display, caso seja idêntico a '0', assim, o número será '5' e não '05';
                    - if checa se já existe '.', caso positivo, não permite a inserção de outro '.';
                    - acrescenta os números inseridos, para que não se limite a um únido dígito ('1234..');
                    - if transforma número decimal em Float, armazena newValue e define o values de state novamente;

