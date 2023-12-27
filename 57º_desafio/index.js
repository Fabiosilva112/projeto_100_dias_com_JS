
import inputRL from 'readline-sync'
    ;

console.log(`===========
Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. 
No final, mostre o total de salários pagos aos homens e o total pago às 
mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não 
sempre que ler os dados de um funcionário.=============`)

let femile = []
let muscle = []
let salarioF = []
let salarioM = []



function teste() {   

    console.log('===========================')

    let sexo =
        inputRL.question
            ("Digite o sexo: ")
    let salario =
        inputRL.question
            ("Digite salário: ")

    let mensagem = inputRL.question
        ("Deseja perguntar novamente (s/n?):")

    if (sexo === 'feminino') {
        femile.push(sexo);
        salarioF.push(parseFloat.salario);        
    } else {
        muscle.push(sexo);
        salarioM.push(parseFloat.salario);
    }

    while (mensagem === 'sim') {
        teste()
        mensagem = ''
    }
}

teste()

console.log(`O total de mulheres cadastradas foram ${femile.length}`)












