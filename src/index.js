import React from "react" // importando o react
import ReactDom from "react-dom" //importando o reactDom
import "./style.css" //importando meu arquivo de css

function sum(a, b){
    return a + b
}

//Declaração de um "elemento" JSX
function myFirstJSX(){
    return (
        <div className="teste">
            Eversinho teste 123 - React é demais 
            <h1>Soma é: {sum(10, 20)}</h1>          
        </div>
    )
}
const App = () => {

    return (
        <div className="App">
            Hello World 
            {myFirstJSX()} {/*Chamada da minha function*/}
        </div>
    )
}

// Fazendo a "conexão" com o meu HTML onde será reinderizado todas as informações
const rootElment = document.getElementById('root')

//Como eu importei o reactDom eu posso utilizar a função .render que recebe um parametro (<App/>) e executar o meu elemento (rootElment, onde vai ser reinderizado tado a minha aplicação)
ReactDom.render(<App/>, rootElment)