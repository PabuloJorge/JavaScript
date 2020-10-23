//conexão com  o banco de dados
const Sequelize = require('sequelize')

const sequelize = new Sequelize('teste', 'root', 'pablodias3', {
    host: "localhost",
    dialect: 'mysql'
})
// validando a conexão com o banco de dados
sequelize.authenticate().then(function () {
    console.log("Conectado com sucesso")
}).catch(function (erro) {
    console.log("Falha ao se conectar: " + erro)
})
//criando a tabela "Postagem" usando sequelize
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.TEXT
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

/*Postagem.sync({
    force: true        (Está parte executa a criação da tabela "Postagem", deve ser executado apenas uma vez)
})*/

//Criando um registro na tabela "Postagem"
Postagem.create({
    titulo: "A volta" ,
    conteudo: "O filme conta..."
})




//criando a tabela "usuarios" usando sequelize
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

/*Titulo.sync({
    force: true   (Está parte executa a criação da tabela "Titulo", deve ser executado apenas uma vez)
})*/

Usuario.create({
    nome: "Pablo",
    sobrenome: "Jorge",
    idade: 21,
    email: "pabulo_dias@hotmail.com"
})