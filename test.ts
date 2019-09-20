// tests go here; this will not be compiled when this package is used as a library
StemBit_Display.LED1(DigitalPin.P0, StemBit_Display.Status.OFF)
StemBit_Sensor.IR_Send(DigitalPin.P1)
if (StemBit_Input.Button(DigitalPin.P1, StemBit_Input.enButton.Press)) {
    StemBit_Music.Buzzer(DigitalPin.P0, StemBit_Music.enBuzzer.NoBeep)
} else {
    StemBit_Motor.Fan(AnalogPin.P0, 0)
}
basic.forever(function () {

})
