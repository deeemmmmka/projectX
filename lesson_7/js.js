// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', function(){
    let box = document.querySelector('.box');

    // box.addEventListener('touchstart', function(e){
    //     e.preventDefault();
    //     console.log("Red box: touchstart");
    //     console.log(e.target);
    //     console.log(e.touches[0].target);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
    // });

    // box.addEventListener('touchmove', function(e){
    //     e.preventDefault();
    //     console.log("Red box: " + e.touches[0].pageX);
    // });

    // box.addEventListener('touchend', function(e){
    //     e.preventDefault();
    //     console.log("Red box: touchend");
    // });

    //Регулярные выражения
    // new RegExp('pattern', 'flags');
    // /pattern/

    // let ans = prompt('Введите ваше имя');

    // let reg = /n/g;

    // console.log(ans.search(reg)); //метод search ищет только первое совпадение

    // console.log(ans.match(reg)); // метод match без флага глобальности дает нам массив по первому совпадению

    // флаги
    // i регистра
    // g глобальности
    // m многострочности

    let pass = prompt('Введите пароль');

    console.log(pass.replace(/./g, "*"));
    alert('12-34-56'.replace(/-/g, ':'));
});