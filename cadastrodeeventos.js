let dataAtual = new Date (2022,8,21);
let dataISODataHoraTmz = new Date("2022-12-22T21:00:00-03:00");
let participantes = ["Paulo", "Shirley", "Lorenzo", "Stephan", "Lourdes"];
let idadedoparticipante = 18;

console.log("***Projeto para cadastro de eventos***")
console.log("")

console.log("!Iniciar cadastro!")
console.log("")

console.log(dataAtual)
console.log("")

if (dataISODataHoraTmz > dataAtual) { 
    
    console.log("Cadastro autorizado");
    console.log("")
} 
    else { 
    console.log("Cadastro não autorizado");
}
    console.log("")

if (idadedoparticipante >= 18) { 
    
    console.log("Prosseguir cadastro");
    console.log("")
} 
    else { 
    console.log ("Idade inválida, cadastro não autorizado"); 
}
    console.log("")

if (participantes.length < 100) { 
    
    console.log(participantes);
    console.log("")

    console.log("Prosseguir cadastramento para o evento");
} 
    else { 
    console.log("Cadastramento não autorizado, excesso de cadastros");
}
    console.log("")

for (let index = 0; index < participantes.length; index++) {
    
    console.log(index);
    
    if (index  == 0 ) {console.log(participantes[index] + " - Organizador");

}   

    else if (index % 2 == 0) {
    console.log(participantes[index] + " - Palestrante");
}

    else {
    console.log(participantes[index] + " - Participante");
}

    console.log("")
    
}

console.log("!Cadastro realizado!")

    console.log("")

console.log("***Fim do Cadastramento***")
