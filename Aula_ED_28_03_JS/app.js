let pilha_pratos = []

//adicionar elementos
pilha_pratos.push("Prato azul")
pilha_pratos.push("Prato laranja")
pilha_pratos.push("Prato vermelho")

console.log(pilha_pratos)

let removido = pilha_pratos.pop();

console.log(removido)
console.log(pilha_pratos)

//topo da pilha
console.log(pilha_pratos.peek())

//tamanho da pilha
console.log(pilha_pratos.length)

//verificar se está vazia
console.log(pilha_pratos.length==0)

console.log(pilha_pratos.length-1)

// function teste_var(){
//     var x = 5;
//     if(x>0){
//         console.log(x);
//         var y = 10;
//     }
//     console.log(y);
//     console.log(x);
// }

// function teste_let(){
//     let x = 5;
//     if(x>0){
//         console.log(x);
//         let x = 10;
//         let y = 10;
//     }
//     console.log(x);
//     console.log(y)
// }

// function teste_const(){
//     const x = 5;
//     if(x>0){
//         console.log(x);
//         const x = 10;
//         const y = 10;
//     }
//     console.log(x);
//     console.log(y)
// }

// teste_var()
// teste_let()
// teste_const()


