// enum Colors{
//     Red = 1,
//     Green,
//     Blue
// }
// function showColor(color: Colors) {
//     console.log(color);
// }
// showColor(Colors.Blue); // exibir azul

// enum UserResponse {
//     No = 0,
//     Yes = 1,
// }

// function respondedEmail(recipient: string, UserResponse: UserResponse): void {
//     //...Salvar no banco se o usuário respondeu sim ou não
// }
// respondedEmail("Caroline", UserResponse.Yes); // exibir sim


// enum TradeType {
//     ACAO = 9281,
//     TESOURO_DIRETO = 3221,
//     TESOURO_SELIC = 6554,
// }
// saveTrade(TradeType.ACAO    ); // exibir 9281



// enum StatusCodes{
//     OK = 200,
//     NotFound = 404,
//     RedRequest = 400,
// }
//  StatusCodes.OK; // exibir 200



// enum Gender {
//     M = 'Masculino',
//     F = 'Feminino',
// }
// Gender.M; // exibir Masculino

enum StatusCodes {
    OK = 200,
    NotFound = 404, 
    BadRequest = 400,
}
const ok = StatusCodes.OK; // exibir 200
const indexOk = StatusCodes['OK']; // exibir 200
const stringBadRequest = StatusCodes[400]; // exibir BadRequest
