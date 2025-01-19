function gridFull0() {
    let tabSudoku = []
    sSize = 9
    for (let i = 0; i < sSize; i++) {
        tabSudoku.push(new Array(sSize).fill(0))
    }
    return tabSudoku
}

function debugGridValid() {
    let grid = []
    grid[0] = [2,8,1,6,4,7,9,3,5]
    grid[1] = [4,6,7,3,9,5,2,8,1]
    grid[2] = [9,3,5,8,2,1,4,6,7]
    grid[3] = [5,4,6,9,1,3,7,2,8]
    grid[4] = [1,9,3,2,7,8,5,4,6]
    grid[5] = [7,2,8,4,5,6,1,9,3]
    grid[6] = [6,7,2,5,3,4,8,1,9]
    grid[7] = [3,5,4,1,8,9,6,7,2]
    grid[8] = [8,1,9,7,6,2,3,5,4]

    return grid
}

function debugGridErr11H() { // doublon 1 aux case 00 et 01, rreur sur ligne[0] horizontale
    let grid = gridFull0()
    grid[0][0] = 1
    grid[0][1] = 1

    return grid
}

function debugGridErr11V() { // doublon 1 aux case 00 et 10, erreur sur la ligne [0] verticale
    let grid = gridFull0()
    grid[0][0] = 1
    grid[0][1] = 1
    
    return grid
}

function debugGridErr11HC() { // doublon 1 aux case 00 et 30, erreur sur ligne[0] horizontale dans une region 3x3 differente
    let grid = gridFull0()
    grid[0][0] = 1
    grid[3][1] = 1

    return grid
}

function debugGridErr11VC() { // doublon 1 aux case 00 et 30, erreur sur la ligne [0] verticale dans une region 3x3 differente
    let grid = gridFull0()
    grid[0][0] = 1
    grid[3][0] = 1

    return grid
}