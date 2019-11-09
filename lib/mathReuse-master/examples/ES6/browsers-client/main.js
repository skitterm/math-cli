import MathReuse from '../../../src/math.js';

let mathRe = new MathReuse;
let addBtn = document.querySelector("#addAction");
let subBtn = document.querySelector("#subAction");
let multBtn = document.querySelector("#multAction");
let divBtn = document.querySelector("#divAction");
let expBtn = document.querySelector("#expAction");
let sqrBtn = document.querySelector("#sqrAction");
let convBtn = document.querySelector("#convAction");

addBtn.addEventListener('click', () => {
      let num1 = Number(document.getElementById('addInput1').value);
      let num2 = Number(document.getElementById('addInput2').value);
      let ans = mathRe.add(num1,num2);
      document.getElementById('addResult').innerHTML= ans;
    });

subBtn.addEventListener('click', () => {
    let num1 = Number(document.getElementById('subInput1').value);
    let num2 = Number(document.getElementById('subInput2').value);
    let ans = mathRe.subtract(num1,num2);
    document.getElementById('subResult').innerHTML= ans;
    });

multBtn.addEventListener('click', () => {
    let num1 = Number(document.getElementById('multInput1').value);
    let num2 = Number(document.getElementById('multInput2').value);
    let ans = mathRe.multiply(num1,num2);
    document.getElementById('multResult').innerHTML= ans;
    });

divBtn.addEventListener('click', () => {
    let num1 = Number(document.getElementById('divInput1').value);
    let num2 = Number(document.getElementById('divInput2').value);
    let ans = mathRe.divide(num1,num2);
    document.getElementById('divResult').innerHTML= ans;
    });    

sqrBtn.addEventListener('click', () => {
    let num1 = Number(document.getElementById('sqrInput1').value);
    let ans = mathRe.sqrroot(num1);
    document.getElementById('sqrResult').innerHTML= ans;
    });      

expBtn.addEventListener('click', () => {
    let num1 = Number(document.getElementById('expInput1').value);
    let num2 = Number(document.getElementById('expInput2').value);
    let ans = mathRe.exp(num1,num2);
    document.getElementById('expResult').innerHTML= ans;
    });    
    
convBtn.addEventListener('click', () => {
    let num1 = Number(document.getElementById('convInput1').value);
    let num2 = Number(document.getElementById('convInput2').value);
    let ans = mathRe.toBaseX(num1,num2);
    document.getElementById('convResult').innerHTML= ans;
    });    