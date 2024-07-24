const prompt = require('prompt-sync')();
const jogos = [] //array para armazenar os jogos;

const modelo = () => {

 let jogo 

 while (true){
   jogo.nome = prompt("Qual é o nome do jogo?")

   if (jogo.nome == ""){
     console.log("você necessita preencher este campo")
   } else {
    break;
   }
 }

 while (true){
   jogo.ano = Number( prompt("Qual é o nome do jogo?"))

   if (jogo.ano < 1958 || jogo.ano > 2024 || isNaN(jogo.ano)){
     console.log("O ano está invalido")
   } else {
    break;
   }
 }
 
 while (true){
    jogo.duracao = Number( prompt("Qual é a duração do jogo?").replaceAll(",","."))
 
    if (jogo.duracao <= 0 || isNaN(jogo.duracao)){
      console.log("O ano está invalido")
    } else {
     break;
    }
 }

 while (true){
    jogo.preco = Number( prompt("Qual é a duração do jogo?").replaceAll(",","."))
    if (jogo.preco != 0 || isNaN(jogo.preco)){
      console.log("O ano está invalido")
    } else {
     break;
    }
 }
  while (true){
    jogo.estudio = prompt("Qual o estudio?")
    if (jogo.estudio == ""){
      console.log("você necessita preencher este campo")
    } else {
     break;
    }
 }
 while (true){
    
    if (jogos.length == 0){
        jogos.sequencia = undefined
        break
    }

    jogo.sequencia = parseInt( prompt("Qual a sequencia do jogo?"))
 
    if (jogo.sequencia < 0 || jogo.sequencia >= jogos.length ||isNaN(jogo.sequencia)){
      console.log("A sequencia é inválida")
    } else {
     break;
    }
 }
  return jogo
}
 const criar = () => {
    let jogo = modelo()
    jogos.push(jogo)
    console.log("Jogo criado com sucesso")
}

const listagem = () => jogos.forEach((jogo, i) => console.log(`${i + 1} - ${jogo.nome} - ${jogo.ano} - ${jogo.duracao} - ${jogo.preco} - ${jogo.estudio} - ${jogo.sequencia}`))



const atualizar = () => {

    while(true){
        
        if (jogo.length == 0){
            console.log("Lista de jogos vazia")
            break
        }
        let indice = parseInt(prompt("Qual é o indice do jogo que deseja atualizar? "))
        if (indice < 0 || indice >= jogos.length || isNaN(indice)){
            console.log("Indice invalido")
        } else {
            const jogo = modelo()
            jogos(indice) = jogo
            break

        }
    }
}

