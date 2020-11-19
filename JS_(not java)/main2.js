"use strict";


let num = 595;

let n1=(num-num%100)/100;
let n2=((num-num%10)-n1*100)/10;
let n3=num%10;
 console.log(num, n1, n2, n3);