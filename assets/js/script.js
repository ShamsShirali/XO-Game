"use strict";

// let number1=document.querySelector('.num1');
// let number2=document.querySelector('.num2');
// let point1=document.querySelector('#poin1');
// let point2=document.querySelector('#poin2');
let pnt = document.querySelector('.point');
let x = 'X';
let o = 'O';
let arr = [];
let count = 0;
let point1 = 0;
let point2 = 0;

// let num1=prompt('Player1:');

// number1.innerHTML=num1;

// let num2=prompt('Player2:');

// number2.innerHTML=num2;

let num1 = prompt('Player1:');
let num2 = prompt('Player2:');

resultGame();
Arr();
table();

function Arr() {
    for (let i = 0; i < 3; i++) {
        arr[i] = [];
    }
}

function table() {
    let tbl = '';

    for (let i = 0; i < 3; i++) {
        tbl += `<tr>`;

        for (let j = 0; j < 3; j++) {
            tbl += `<td onclick="Click(${i},${j})"> ${arr[i][j] == undefined ? ' ': arr[i][j]}</td>`;
        }

        tbl += `</tr>`;
    }

    document.querySelector('table').innerHTML = tbl;
}

function Click(i, j) {
    if (arr[i][j] == undefined) {
        if (count % 2 == 0) {
            arr[i][j] = x;
            winPlayer();
        }
        else {
            arr[i][j] = o;
            winPlayer();
        }

        count++;
        table();
    }
    else{
        alert('No one won');
        resultGame();
        Arr();
    }
}

function winPlayer() {
    for (let i = 0; i < 3; i++) {
        // for (let j = 0; j < 3; j++) {
        if (arr[i][0] ==x && arr[i][1] == x && arr[i][2] == x || arr[0][i] ==  x && arr[1][i] == x && arr[2][i] == x || arr[0][0]==x && arr[1][1]==x && arr[2][2]==x || arr[0][2]==x && arr[1][1]==x && arr[2][0]==x) {
            alert(`${num1} win`);
            point1++;
            resultGame();
            Arr();
        }
        else if (arr[i][0] == o && arr[i][1] == o && arr[i][2] == o || arr[0][i] ==  o && arr[1][i] == o && arr[2][i] == o || arr[0][0]==o && arr[1][1]==o && arr[2][2]==o || arr[0][2]==o && arr[1][1]==o && arr[2][0]==o) {
            alert(`${num2} win`);
            point2++;
            resultGame();
            Arr();
        }
        // else{
        //     alert('No one won');
        //     resultGame();
        // }
        // }
    }
}

function resultGame() {
    let point = `<tr>
    <th>figure</th>
    <th>name</th>
    <th>point</th>
    </tr>`;


    point += `<tr>
    <th>${x}</th>
    <td>${num1}</td>
    <td>${point1}</td>
    </tr>`;

    point += `<tr>
    <th>${o}</th>
    <td>${num2}</td>
    <td>${point2}</td>
    </tr>`;

    pnt.innerHTML = point;
}