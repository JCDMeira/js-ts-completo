// * Aula 271 - O structural type system do typeCript
/*
    _Nota_
    _ sistema de tipagem estruturada
    _ ele na verdade não procura pelo tipo User no código abaixo
    _ ele não verifica a identidade, mas sim procura um objeto
    _ que cumpra com as regras do type User (receber dois parâmetros
    _ que são strings)

*/

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = {
  username: string,
  password: string,
}

const verifyUser: VerifyUserFn = (user, sentValue) => {
    return (
        user.username === sentValue.username && user.password === sentValue.password
    );
};

const BdUser = { username: "João", password: "123456"};
const sentUser = { username: "João", password: "123456"};
const loggedIn = verifyUser(BdUser, sentUser);
console.log(loggedIn);

//  @ Module mode
export default {  };
