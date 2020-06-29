let kakudo = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        kakudo = randint(0, 90)
        pins.servoWritePin(AnalogPin.P0, kakudo)
        basic.pause(1000)
    }
    basic.showString("" + (kakudo))
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
})
