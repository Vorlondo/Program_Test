"use strict";

let A = 'textA';
let B = 'textB';
let C = 'textC';
console.log(A, B, C);
B = A;
C = B;
A = C;
console.log(A, B, C);


let x = 2;
let y;


y = 4*((x-3)**6) - 7*((x-3)**3) + 2;
console.log(y);


let file_size_byte = 1235654;
let file_size_kbyte = Math.floor(file_size_byte/1024);
console.log(file_size_kbyte);


let num = 55;
let num_f = (num-num%10)/10;
let num_s = num%10;
num_summ = num_f+num_s;
num_prod = num_f*num_s;
console.log(num_f, num_s, num_summ, num_prod);


let N = 8533;
let H = Math.trunc(N/3600);
console.log(N," sec",H," h");


let K = 285;
let Day_n = (K%7);
let Day_W = Day_n < 3 ? w_Day_Y + 5 : w_Day_Y - 2;
console.log(K, Day_W);


let Num_y = 1996;
let Num_cen = (Math.trunc (Num_y - 1)) + 1;
console.log(Num_cen);


let Num_three = 123;
let Num_1 = String(Num_three)[0];
let Num_2 = String(Num_three)[1];
let Num_3 = String(Num_three)[2];
console.log(`${Num_3 + Num_2 +Num_1}`);


let A = 5;
let B = 3;
(A>2 && B<=3) ? console.log("Справедливы неравенства"): console.log("НЕСПРАВЕДЛИВОСТЬ БЫТИЯ");

let A = 15;
let B = 10;
(A%2 && B%2) ? console.log("Каждое из чисел А и В нечетное"): console.log("Каждое из чисел А и В четные");


let A = 113;
(A%2 && ((Math.trunc(A/1000)) == 0) && A>0) ? console.log("Данное число является нечетным трехзначным") : console.log("не выполнено условие"); 
//String(A).length == 3

let A = 1234;
(String(A)[0] == String(A)[3] && String(A)[1] == String(A)[2]) ? console.log("Данное число читается одинаково слева направо и справа налево"): console.log("неверно");