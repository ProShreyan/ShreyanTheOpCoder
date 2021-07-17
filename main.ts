let A = 25
let Rem = A % 2
if (Rem == 0) {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # . .
        # . . . .
        # # # # #
        `)
} else {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
}
