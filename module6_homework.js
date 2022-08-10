// Задание 1
function number(num){
    num = + prompt('Введите число');
    if (num % 2 == 0){
        console.log('Число чётное');
    } else if (num % 2 != 0){
        console.log('Число нечётное');
    } else if (num === 0){
        console.log('Число 0');
    } else {
        console.log('Это не число');
    }
}
number(num);


// Задание2

function number(i){
    if (i < 1000){
        let a = 'Число простое';
        console.log(a);
    } else if (i => 1000){
        let b = 'Данные неверны';
        console.log(b);
    }
}
number(3);
number(1003);

//Задание3

function func1(){
    return 32;
}
function func2(){
    return 45;
}
function sum(func1, func2){
    console.log(func1() + func2());
}
sum(func1, func2);

// Задание 4

const number = function (a, b){
    if (a <= b){
        console.log(a);
        a++;
    } else if (a > b){
        clearInterval(Number);
    }
}
setTimeout(function(){
    number(5, 15);
},1000);

// Задание 5

const calc = (x, n) => {
    let um = x ** n;
    console.log(um);
};
calc(5, 2)