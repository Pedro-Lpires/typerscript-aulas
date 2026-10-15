
// interface TObejtos {
//     id: number;
//     name: string;
//     email: string;
// }

// interface User extends TObejtos { // necessario so se fosse acrescentar mais propriedades, mas como nao acrescentei, nao é necessario

// }
// const newUser: User = { // ja poderia ter sido do tipo TObejtos, mas como criei a interface User, posso usar ela. mas se eu nao tivesse criado a interface User, poderia ter usado TObejtos diretamente
//     id: 1,
//     name: "Alice",
//     email: "alice123@gmail.com"
// };
// console.log(newUser);



// Exercicio de parâmetros opcionais em TS

interface User {
    name: string;
    age: number;
    gender?: string; // o ponto de interrogação indica que a propriedade é opcional
}

function profile({name, age, gender = "Masculino"}: User) { //O valor padrão (gender = "Masculino") é uma funcionalidade de parâmetro de função / no caso inicio tinha feito com const.(nao prestei atencao ao enunciado)
    console.log("Nome: ", name);
    console.log("Idade: ", age);
    console.log("Gênero: ", gender);
}
profile({name: "Alice", age: 25, gender: "feminino"}); // Nome: Alice, Idade: 25, Gênero: feminino
profile({ name: "Bob", age: 30 }); // Nome: Bob, Idade: 30, Gênero: Masculino (valor padrão)

//com const q era o jeito q eu tinha feito =
// const profile = ({name, age, gender = "Masculino"}: User) => {
//     console.log("Nome: ", name);
//     console.log("Idade: ", age);
//     console.log("Gênero: ", gender);
// }

// //Resumindo:

// Use function ou const com arrow function quando precisa de lógica e valores padrão
// Use a interface para tipar os parâmetros da função, não a função em si