turn = 1
// let square = document.getElementById('square1, square2, square3, square4, square5, square6, square7, square8, square9')
function clickSquare1() {
    if (turn == 1) {
        document.getElementById('square1').value = "X";
        document.getElementById('square1').disabled = true;
        turn = 0;
        console.log('clicked X')
    }
    else {
        document.getElementById('square1').value = "O";
        document.getElementById('square1').disabled = true;
        turn = 1;
        console.log('clicked O')
    }
}