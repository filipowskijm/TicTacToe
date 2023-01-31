// function to check if game is won
function winGame() {
    var s1, s2, s3, s4, s5, s6, s7, s8, s9;
   s1 = document.getElementById('square1').value; 
   s2 = document.getElementById('square2').value; 
   s3 = document.getElementById('square3').value; 
   s4 = document.getElementById('square4').value; 
   s5 = document.getElementById('square5').value; 
   s6 = document.getElementById('square6').value; 
   s7 = document.getElementById('square7').value; 
   s8 = document.getElementById('square8').value; 
   s9 = document.getElementById('square9').value; 

// Player X win checks
if ((s1 == 'X') && (s2 == 'X') && (s3 == 'X')) {
    document.getElementById('print').innerHTML = 'Player X Wins!'
    }
else if ((s1 == 'X') && (s4 == 'X') && (s7 == 'X')) {
    document.getElementById('print').innerHTML = 'Player X Wins!'
    }
else if ((s7 == 'X') && (s8 == 'X') && (s9 == 'X')) {
    document.getElementById('print').innerHTML = 'Player X Wins!'
    }
else if ((s3 == 'X') && (s6 == 'X') && (s9 == 'X')) {
    document.getElementById('print').innerHTML = 'Player X Wins!'
    }
else if ((s2 == 'X') && (s5 == 'X') && (s8 == 'X')) {
    document.getElementById('print').innerHTML = 'Player X Wins!'
    }
else if ((s1 == 'X') && (s5 == 'X') && (s9 == 'X')) {
    document.getElementById('print').innerHTML = 'Player X Wins!'
    }
else if ((s3 == 'X') && (s5 == 'X') && (s7 == 'X')) {
    document.getElementById('print').innerHTML = 'Player X Wins!'
    }
else if ((s4 == 'X') && (s5 == 'X') && (s6 == 'X')) {
    document.getElementById('print').innerHTML = 'Player X Wins!'
    }

// Player O Win Checks
else if ((s1 == 'O') && (s2 == 'O') && (s3 == 'O')) {
    document.getElementById('print').innerHTML = 'Player O Wins!'
    }
else if ((s1 == 'O') && (s4 == 'O') && (s7 == 'O')) {
    document.getElementById('print').innerHTML = 'Player O Wins!'
    }
else if ((s7 == 'O') && (s8 == 'O') && (s9 == 'O')) {
    document.getElementById('print').innerHTML = 'Player O Wins!'
    }
else if ((s3 == 'O') && (s6 == 'O') && (s9 == 'O')) {
    document.getElementById('print').innerHTML = 'Player O Wins!'
    }
else if ((s2 == 'O') && (s5 == 'O') && (s8 == 'O')) {
    document.getElementById('print').innerHTML = 'Player O Wins!'
    }
else if ((s1 == 'O') && (s5 == 'O') && (s9 == 'O')) {
    document.getElementById('print').innerHTML = 'Player O Wins!'
    }
else if ((s3 == 'O') && (s5 == 'O') && (s7 == 'O')) {
    document.getElementById('print').innerHTML = 'Player O Wins!'
    }
else if ((s4 == 'O') && (s5 == 'O') && (s6 == 'O')) {
    document.getElementById('print').innerHTML = 'Player O Wins!'
    }

// tie game check
if ((s1 == 'O' || s1 == 'X') && (s2 == 'O' || s2 == 'X') && (s3 == 'O' || s3 == 'X') && (s4 == 'O' || s4 == 'X') && (s5 == 'O' || s5 == 'X') && (s6 == 'O' || s6 == 'X') && (s7 == 'O' || s7 == 'X') && (s8 == 'O' || s8 == 'X') && (s9 == 'O' || s9 == 'X')) {
    document.getElementById('print').innerHTML = 'Tie Game!'
}
}

// reset button function
function reset() {
    location.reload();
}

// click boxes and return X or O based on turn
turn = 1
function clickSquare1() {
    if (turn == 1) {
        document.getElementById('square1').value = "X";
        document.getElementById('square1').disabled = true;
        turn = 0;
    }
    else {
        document.getElementById('square1').value = "O";
        document.getElementById('square1').disabled = true;
        turn = 1;
    }
}
function clickSquare2() {
    if (turn == 1) {
        document.getElementById('square2').value = "X";
        document.getElementById('square2').disabled = true;
        turn = 0;
    }
    else {
        document.getElementById('square2').value = "O";
        document.getElementById('square2').disabled = true;
        turn = 1;
    }
}
function clickSquare3() {
    if (turn == 1) {
        document.getElementById('square3').value = "X";
        document.getElementById('square3').disabled = true;
        turn = 0;
    }
    else {
        document.getElementById('square3').value = "O";
        document.getElementById('square3').disabled = true;
        turn = 1;
    }
}
function clickSquare4() {
    if (turn == 1) {
        document.getElementById('square4').value = "X";
        document.getElementById('square4').disabled = true;
        turn = 0;
    }
    else {
        document.getElementById('square4').value = "O";
        document.getElementById('square4').disabled = true;
        turn = 1;
    }
}
function clickSquare5() {
    if (turn == 1) {
        document.getElementById('square5').value = "X";
        document.getElementById('square5').disabled = true;
        turn = 0;
    }
    else {
        document.getElementById('square5').value = "O";
        document.getElementById('square5').disabled = true;
        turn = 1;
    }
}
function clickSquare6() {
    if (turn == 1) {
        document.getElementById('square6').value = "X";
        document.getElementById('square6').disabled = true;
        turn = 0;
    }
    else {
        document.getElementById('square6').value = "O";
        document.getElementById('square6').disabled = true;
        turn = 1;
    }
}
function clickSquare7() {
    if (turn == 1) {
        document.getElementById('square7').value = "X";
        document.getElementById('square7').disabled = true;
        turn = 0;
    }
    else {
        document.getElementById('square7').value = "O";
        document.getElementById('square7').disabled = true;
        turn = 1;
    }
}
function clickSquare8() {
    if (turn == 1) {
        document.getElementById('square8').value = "X";
        document.getElementById('square8').disabled = true;
        turn = 0;
    }
    else {
        document.getElementById('square8').value = "O";
        document.getElementById('square8').disabled = true;
        turn = 1;
    }
}
function clickSquare9() {
    if (turn == 1) {
        document.getElementById('square9').value = "X";
        document.getElementById('square9').disabled = true;
        turn = 0;
    }
    else {
        document.getElementById('square9').value = "O";
        document.getElementById('square9').disabled = true;
        turn = 1;
    }
}




