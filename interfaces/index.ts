
interface   interfaceCustomer {
    firstName: string;
    lastName?: string;
    age: number;
}
interface IAdress {
street: string;
}

interface ICustomerprofile extends interfaceCustomer, IAdress{ } 

const newProfile: ICustomerprofile = {
    firstName: "Jane",
    age: 25,
    lastName: "Smith",
    street: "123 Main St"
};