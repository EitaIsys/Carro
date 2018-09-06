declare function require (msg:string) : any;
var readline = require('readline-sync');

import {Carro} from "./Carro";

let car : Carro = new Carro();

while(true){
    let comandosPossiveis : string = " " +
    "show - mostrar a quantidade de passageiros,combustível e quilometragem,\n" +
    "km - distancia que deseja percorrer\n"+
    "emb - embarcar um passageiro\n"+
    "des - desembarcar um passageiro\n"+
    "aba - quantidade de litros para abastecer o carro\n"+
    "sair - sair do programa"
    
    let comando : Array<string> = readline.question ("Digite um comando: ").split(" ");

    if(comando[0] == "sair"){
        console.log("Até a próxima!");
        break;
    }
    switch(comando[0]){
        case "show" :
            console.log(car.show());
            break;

        case "aba" :
            let gasosa : number = Number (comando[1]);
            car.abastecer(gasosa);
            console.log("Carro abastecido.");
            break;
    
        case "km" :
            let quilometro : number = Number (comando[1])
            car.dirigir(quilometro);
            
            break;
        
        case "emb" : 
            if (car.embarcar() == true){
                console.log("Passageiro embarcado.");
            } else {
                console.log("Não é possivel embarcar outro passageiro.");
            }
            break;

        case "des" :
            if (car.desembarcar() == true){
                console.log("Passageiro desembarcado");
            } else
                console.log("Todos os passageiros desembarcaram.")
        case "help" :
            console.log(comandosPossiveis);
            break;
        }
    }