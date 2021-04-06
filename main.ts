bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        # # # # .
        # # . . .
        # . # . .
        # . . # .
        . . . . #
        `)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 2)
})
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
    while (true) {
    	
    }
})
