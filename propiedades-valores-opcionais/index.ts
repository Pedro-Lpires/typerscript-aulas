type Customer = {
    firstName: string;
    lastName?: string; // o ponto de interrogação indica que a propriedade é opcional
    age: number;
}
const newCustomer: Customer = {
    firstName: "John",
    age: 30
}
console.log(newCustomer);

function printName(firstName: string, lastName?: string) { 
    console.log(`O nome do cliente é ${firstName} ${lastName}`);
}
printName("John"); // O nome do cliente é John , e nao preciso passar o segundo argumento, pois ele é opcional

printName("John", "Doe"); // O nome do cliente é John Doe