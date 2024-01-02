Feature: Cadastro de usuario

    Scenario Outline: Cadastro de usuario com sucesso
    Given que cadastro um novo usuario no sistema
    When realizo a chamada da api de cadastro com o usuario gerado
    #And deve ser exibido o status code 200
    #Then no response deve exibir os dados do usuario cadastrado

    #Scenario Outline: Cadastro de usuario sem sucesso
    #Given que cadastro um novo usuario no sistema
    #When realizo a chamada da api nao informando nome de usuario    
    #Then no response deve exibir mensagem de erro


    

    
