A = 25
Rem = A % 2
if Rem == 0:
    basic.show_leds("""
        # # # # #
                # . . . .
                # # # . .
                # . . . .
                # # # # #
    """)
else:
    basic.show_leds("""
        . # # # .
                # . . . #
                # . . . #
                # . . . #
                . # # # .
    """)