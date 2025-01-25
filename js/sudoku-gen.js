// Les grilles sudoku sont représenté par un tableau en 2 dimension, combosé de nombre entier

function helloWorldSudoku() {
    console.log("Hello World from SudokuGen.js")
}

// Incomplet
function genSudoku() {
    let tabSudoku = []
    sSize = 9
    for (let i = 0; i < sSize; i++) {
        tabSudoku.push(new Array(sSize).fill(0));
    }
    return tabSudoku;
}

// A Finir, test avec [0][0] = 1 et [0][1] = 1 fait et fonctionnelle
// Le tableau contien des chiffres de 0 à 9, '0' pour les case qui n'ont pas encore été écrites
// retourne un Booleen si la region sudoku 3x3 de (x,y) dans sudokuGrill est valide
function isSquareValid(x,y,sudokuGrill) {
    let topLeftX, topLeftY
    let out = true
    topLeftX = Math.trunc(x/3)
    topLeftY = Math.trunc(y/3)

    let listNum = []
    for (i=0;i<3;i++){
        for (j=0;j<3;j++) {
            num = sudokuGrill[i][j]
            if (listNum.includes(num) && (num != 0)) {
                out = false
                return out
            }
            listNum.push(num)
        }
    }
    return out
}

function isLineValid(x,y,sudokuGrill) {
    let h, v
    let listNum
    let out = true
    h = x
    v = y
 
    // test ligne horizontale
    listNum = []
    for (i=0;i<9;i++) {
        num = sudokuGrill[h][i]
        if (listNum.includes(num) && (num != 0)) {
            out = false
            //console.error('Erreur H')
            return out
        }
        listNum.push(num)
    }

    // test ligne verticale
    listNum = []
    for (i=0;i<9;i++) {
        num = sudokuGrill[i][v]
        if (listNum.includes(num) && (num != 0)) {
            out = false
            //console.error('Erreur V')
            return out
        }
        listNum.push(num)
    }

    return out
}

// Tester si un chiffre a la position [x,y] est valide
function isAtxyValid(x,y,sudokuGrill) {
    if (isLineValid(x,y,sudokuGrill) && isSquareValid(x,y,sudokuGrill))
        return true
    else
        return false
}