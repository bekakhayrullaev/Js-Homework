

let user = prompt ('Как вас зовут?')

if(user[0].toLowerCase() === 'a' || user[0].toLowerCase() === 'A') {
    console.log('Добро пожаловать');
    let age = +prompt ('Сколько тебе лет?')

    if(age >=20 && age <= 40) {
        console.log('Зайдите ');
    } else {
        console.log('Клуб для молодых')
    }
    let money = +prompt ('Сколько денег ты принес?')
    if(money >=100 ) {
        console.log('круто');
    } else {
        console.log('Недостаточно средств')
    }
    let info = +prompt('Сколько человек с вами?')

    if(info  >=1 && info <= 10){
        console.log('хорошего вечера');
    }  else {
        console.log('Вместимость клуба 10 чел')
    }
} else {
            console.log('Извини но мы Расисты')
        }