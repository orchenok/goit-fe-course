'use strict';

const ADMIN_LOGIN  =  'admin' ;
const ADMIN_PASSWORD  =  'm4ngo1zh4ackz0r' ;

const userCancel = 'Отменено пользователем!';
const userError = 'Доступ запрещен!';
const userCorrect = 'Добро пожаловать!';

const userLogin = prompt('log in');
let userPass;

if (userLogin === null) {
  alert(userCancel);
} else if (userLogin === ADMIN_LOGIN) {
  userPass = prompt('Enter yuor password');
  
  switch (userPass) {
    case null: alert(userCancel);
    break;
    case 'm4ngo1zh4ackz0r': alert(userCorrect);
    break;
    default: alert(userError);     
  }  
} else {
  alert(userError);
}
