let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
let resetButton = document.getElementById("resetButton");
let solveButton = document.getElementById("solveButton");

solveButton.addEventListener("click", solveBoard);
resetButton.addEventListener("click", resetBoard);

function solveBoard() {
    let row = 0;
    let column = 0;
    for (let i = 1; i <= 81; i++) {
        let value = document.getElementById(String(i)).value;
        if (isNaN(value) || value < 0 || value > 9) {
            alert("Invalid input");
            return;
        }
        if (column < 9) {
            board[row][column] = value;
            column++;
        } else {
            row++;
            column = 0;
            board[row][column] = value;
            column++;
        }
    }
    if (solve(board)) {
        printBoard(board);
    } else {
        alert("Board is unsolvable");
    }
}

function printBoard(board) {
    let row = 0;
    let column = 0;
    for (let i = 1; i <= 81; i++) {
        if (column < 9) {
            document.getElementById(String(i)).value = board[row][column];
            column++;
        } else {
            row++;
            column = 0;
            document.getElementById(String(i)).value = board[row][column];
            column++;
        }
    }
}

function resetBoard() {
    let newBoard = [
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
    ];
    printBoard(newBoard);
}

function solve(board) {
    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            if (board[row][column] == 0) {
                for (let tryNum = 1; tryNum <= 9; tryNum++) {
                    if (isValidPlacement(board, tryNum, row, column)) {
                        board[row][column] = tryNum;
                        if (solve(board)) {
                            return true;
                        } else {
                            board[row][column] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function isValidPlacement(board, num, row, column) {
    return (
        !isNumberInRow(board, num, row) &&
        !isNumberInColumn(board, num, column) &&
        !isNumberInBox(board, num, row, column)
    );
}

function isNumberInRow(board, num, row) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] == num) {
            return true;
        }
    }
    return false;
}

function isNumberInColumn(board, num, column) {
    for (let i = 0; i < 9; i++) {
        if (board[i][column] == num) {
            return true;
        }
    }
    return false;
}

function isNumberInBox(board, num, row, column) {
    let boxRow = row - (row % 3);
    let boxCol = column - (column % 3);
    for (let i = boxRow; i < boxRow + 3; i++) {
        for (let j = boxCol; j < boxCol + 3; j++) {
            if (board[i][j] == num) {
                return true;
            }
        }
    }
    return false;
}
