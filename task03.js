debugger;
let num = prompt('Введите число');
let length = num.length;
num = Number(num);
let s = 0;
let res = 0;
for (let i = 0; i < length; i++) {
    s = num % 10; 
    res += s; 
    num = parseInt(num / 10); 
}
console.log(res);