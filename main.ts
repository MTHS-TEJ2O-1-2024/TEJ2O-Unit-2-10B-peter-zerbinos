/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Peter Zerbinos
 * Created on: Oct 2024
 * This program will light up Neopixels depending on amount of light
*/

//if lightLevel <= 51

input.onButtonPressed(Button.A, () => {
    let lightLevel = input.lightLevel()
    if (lightLevel <= 51) 
    
    {}
})

//if lightLevel > 52

input.onButtonPressed(Button.A, () => {
    let lightLevel = input.lightLevel()
    if (lightLevel > 52)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    { }
})

//if lightLevel > 104

input.onButtonPressed(Button.A, () => {
    let lightLevel = input.lightLevel()
    if (lightLevel > 104)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    { }
})

//if lightLevel > 156

input.onButtonPressed(Button.A, () => {
    let lightLevel = input.lightLevel()
    if (lightLevel > 156)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    { }
})

//if lightLevel > 280

input.onButtonPressed(Button.A, () => {
    let lightLevel = input.lightLevel()
    if (lightLevel > 280)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    { }
})
