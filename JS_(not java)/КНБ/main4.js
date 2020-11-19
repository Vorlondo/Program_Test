"use strict";



let rock = "камень";
let scissors = "ножницы";
let paper = "бумага";

alert("Добро пожаловать в игру!");  

let player_1 = prompt('Pl_1 Введите: камень, ножницы, бумага (ctrl+c используй ты)', '');
let player_2 = prompt('Pl_2 Введите: камень, ножницы, бумага (ctrl+c используй ты)', '');

if ((player_1 == rock) && (player_2 == rock)
     || (player_1 == scissors) && (player_2 == scissors)
         || (player_1 == paper) && (player_2 == paper)){
    alert('ничия, pls F5');
}else
{
    if ((player_1 == paper) && (player_2 == rock) )
    {
        alert('победа первого игрока, бумага оборачивает камень');
    }else{ if ((player_1 == rock) && (player_2 == scissors) )
        {
            alert('победа первого игрока, камень бьет ножницы');
        }else{ if ((player_1 == scissors) && (player_2 == paper) )
            {
                alert('победа первого игрока, ножницы режут бумагу');
            }else{ if ((player_2 == paper) && (player_1 == rock) )
                {
                    alert('победа второго игрока, бумага оборачивает камень');
                }else { if ((player_2 == rock) && (player_1 == scissors) )
                    {
                        alert('победа второго игрока, камень бьет ножницы');
                    }else { if ((player_2 == scissors) && (player_1 == paper) )
                        {
                            alert('победа второго игрока, ножницы режут бумагу');
                        }else{
                            alert("ДУРАЧЕК???????");}
            }
        }
    }
}
}
}
alert("dbg")
