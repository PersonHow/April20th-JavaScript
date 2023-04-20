// const { Alert } = require("bootstrap");

const btn = document.querySelector("#btn");
const select = document.querySelector("#select");
const input1 = document.querySelector("#num1");
const input2 = document.querySelector("#num2");   
const count = document.querySelector("#count");



btn.addEventListener('click',function(){
    let num1 = +input1.value;
    let num2 = +input2.value;
    // let num3= "fuck you 好好功讀書!!!!!!!!!";
    let total;
  
    switch(+select.value){

    case(1):
    total = num1 + num2 ;
    count.innerText = total;
    input1.value = null;
    input2.value = null;
    break;

    case(2):
    total = num1 - num2;
    count.innerText = total;
    input1.value = null;
    input2.value = null;
    break;

    case(3):
    total = num1 * num2+num;
    count.innerText = total;
    input1.value = null;
    input2.value = null;
    break;

    case(4):
    total = num1 / num2;
    count.innerText = total;
    input1.value = null;
    input2.value = null;
    break;

    default:
    total = num1 % num2+num3;
    count.innerText = total;
    input1.value = null;
    input2.value = null;
    break;
}
})