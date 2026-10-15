// function markeArray<T>(item: T): T[]{
//     return [item];
// }
// const numbers = markeArray(10);
// console.log(numbers);

// const names = markeArray("Pedro");
// console.log(names)

//meu 
function generics<T>(item: T): T[] {
    return [item]; // o retorno da função é um array.
}

const retornoGenerics = ["Pedro", "Maria", "João", 10, 20, true, false];

retornoGenerics.forEach(result => { 
    console.log(result); 
});


//do professor=

function mostrarItens<T>(itens: T[]): void {
  itens.forEach(item => console.log(item))
}

mostrarItens<number>([1, 2, 3, 4])
mostrarItens<string>(['a', 'b', 'c'])


