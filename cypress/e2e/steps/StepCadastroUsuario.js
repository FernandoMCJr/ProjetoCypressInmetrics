import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que cadastro um novo usuario no sistema", function () {

    cy.gerarNomeAleatorio().then(nome => {
        cy.gerarEmailAleatorio(nome).then(email => {
 
            //console.log(" Aqui está " + nome + sobrenome)
 
            const jsonDaRequestCadastroPetStore = {
                "id": 10,
                "username": nome,
                "email": email,
                "password": "123456789",
                "phone": "11997645376",
                "userStatus": "",
                "type": "usuario"
            }
 
            cy.writeFile('cypress/fixtures/endpointCadastroUsuarios/requests/jsonRequestCriarUsuario.json', jsonDaRequestCadastroPetStore)
        });
    });
 
});

when('realizo a chamada da api de cadastro com o usuario geradolizando', () => {
    //const requestJsonCriarUsuario = require('../../fixtures/endpointCadastroUsuarios/requests/jsonRequestCriarUsuario.json')
})