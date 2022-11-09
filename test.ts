// tests go here; this will not be compiled when this package is used as a library
stembit_Display.LED1(DigitalPin.P0, stembit_Display.Status.OFF)
stembit_Sensor.IR_Send(DigitalPin.P1)
if (stembit_Input.Button(DigitalPin.P1, stembit_Input.enButton.Press)) {
    StemBit_Music.Buzzer(DigitalPin.P0, stembit_Music.enBuzzer.NoBeep)
} else {
    stembit_Motor.Fan(AnalogPin.P0, 0)
}
basic.forever(function () {

})
