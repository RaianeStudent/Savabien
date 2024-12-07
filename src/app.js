// importando o express para ser utilizado em nosso projeto.
//const express = require('express') - Outra maneira:
import express from 'express'

//instanciando o express na variável app, mediante um dos seus construtores.
const app = express()


//criando uma rota padrão da requisição do projeto (Endpoint "/": barra seria a raiz do projeto).
 app.get('/', (req, res) => {

    // Uma função possui uma requisição e uma resposta.
    res.send('Hello World!')
  })

  app.get('/selecoes', (req, res) => {
    res.send('')

  })

  
  //permitindo o arquivo do servidor, em visualizar a variável app.
  export default app
