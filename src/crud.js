import './App.css';
import React, { useState, useEffect } from 'react';



function  Input() {
const [entrada, setEntrada] = useState("");

useEffect(() => {
    setEntrada(entrada);
}, [""])
    return (
      <div className="App">
        <h3>Teste de CRUD em um input</h3>
        <label for ="name">Escreva na caixa de texto e veja o contúdo aparecer na tela</label>
        <br/>
        <br/>
        
        <div>
        <input
        id ="name"
         type="text"
         value = {entrada}
         placeholder="Escreva na caixa de texto"
         onChange={(e) =>{
             setEntrada(e.target.value)
            }}
         >

         </input>
         </div>
<p>O nome que você escreveu é: {entrada}</p>
{console.log(entrada)}
      </div>
      
    );
  }
  
  export default Input;