export const paginaonPerpage = 10;

export  interface customer { 
    name: string;
    age: number;

}

//usando o export em 2 lugares diferentes, o import tem que ser feito com chaves, se fosse export default, o import seria sem chaves

//usando export global

// const paginaonPerpage = 10;

//  interface customer {
//     name: string;
//     age: number;

// }
// export { paginaonPerpage, customer };