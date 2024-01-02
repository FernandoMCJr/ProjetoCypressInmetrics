
Cypress.Commands.add('gerarNomeAleatorio', () => {
    const listaNomes = require('../fixtures/endpointCadastroUsuarios/requests/listaDeNomes.json').nomes;  // realiza a leitura de um arquivo txt, json
    const posicaoNomeComPonto = Math.random() * listaNomes.length;   //gera uma sequencia rondomicas
    const posicaoNomeSemPonto = Math.floor(posicaoNomeComPonto)  //Math.flooor, numeros com virgulas em numeros inteiros

    return listaNomes[posicaoNomeSemPonto];
  })

Cypress.Commands.add('gerarEmailAleatorio', (nome) => {
    
    const min = 100000000;
    const max = 999999999;
    
    const numeroAleatorioDe9Digitos = Math.floor(Math.random() * (max - min + 1)) + min; //calculo para gerar um numero aleatorio entre dois pontos, ou seja dentro do range
    

    return nome + numeroAleatorioDe9Digitos + '@hotmail.com';

  })

  Cypress.Commands.add('escreverArquivoJson', (caminhoArquivoJson, novoJson) => {
      cy.writeFile(caminhoArquivoJson, )
  })