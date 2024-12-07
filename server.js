import app from './src/app.js'

//habilitando uma porta para nosso localhost
const port = 3000

//escutar a conexão da porta
app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
  })