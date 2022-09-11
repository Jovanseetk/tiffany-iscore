let timer = 0
basic.showIcon(IconNames.Happy)
let light_sensor_reading = pins.analogReadPin(AnalogPin.P1)
basic.clearScreen()
let mode = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("code written by jovan see :)")
    }
    if (input.buttonIsPressed(Button.AB)) {
        mode = 1
    }
})
basic.forever(function () {
    while (mode == 0) {
        light_sensor_reading = pins.analogReadPin(AnalogPin.P1)
        if (light_sensor_reading == 511) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else {
            basic.pause(3000)
        }
    }
    if (mode == 1) {
        basic.showString("timer mode")
        timer = 1
        if (input.buttonIsPressed(Button.A)) {
            timer += 1
            if (timer == 10) {
                timer = 1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(timer * 1000)
            basic.clearScreen()
        }
        if (input.buttonIsPressed(Button.AB)) {
            mode = 0
        }
    }
})
