function printClientId(id: number | string) { // A função aceita um parâmetro que pode ser do tipo number ou string. isso seria o union type, que é uma forma de dizer que a variável pode ter mais de um tipo de dado.
    console.log(`O id do cliente é: ${id}`);
    
}
printClientId(100); // Chamada da função com um número válido
printClientId("abc123"); // Chamada da função com uma string válida