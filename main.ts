gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Up, function () {
    BitBuggy.brake()
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Up, function () {
    BitBuggy.brake()
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Down, function () {
    BitBuggy.turnleft()
    radio.sendNumber(3)
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    BitBuggy.turnright()
    radio.sendNumber(4)
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Down, function () {
    BitBuggy.back()
    radio.sendNumber(2)
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Up, function () {
    BitBuggy.brake()
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    BitBuggy.forward()
    radio.sendNumber(1)
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Up, function () {
    BitBuggy.brake()
    radio.sendNumber(0)
})
radio.setGroup(1)
BitBuggy.init_wheel(AnalogPin.P1, AnalogPin.P2)
BitBuggy.freestyle(0, 0)
