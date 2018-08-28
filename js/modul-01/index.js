'use strict';

/*
  Напишите скрипт, для авторизации администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен!'   
    - Если был введен логин совпадающий со значением константы adminLogin, спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

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