input.onButtonPressed(Button.A, function () {
    bitbot.ledBrightness(0)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 3232, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.soaring), SoundExpressionPlayMode.UntilDone)
    bitbot.ledBrightness(255)
    bitbot.setLedColor(bitbot.convertRGB(255, 10, 10))
    bitbot.goms(BBDirection.Reverse, 100, 2000)
    bitbot.rotate(BBRobotDirection.Left, 6000)
    while (bitbot.sonar(BBPingUnit.Centimeters) > 20) {
        bitbot.stop(BBStopMode.Brake)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
    bitbot.stop(BBStopMode.Coast)
    bitbot.ledClear()
})
input.onButtonPressed(Button.B, function () {
    bitbot.ledBrightness(255)
    bitbot.goms(BBDirection.Forward, 60, 1500)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    while (bitbot.sonar(BBPingUnit.Centimeters) > 20) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1, 5000, 255, 0, 400, SoundExpressionEffect.Warble, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        bitbot.stop(BBStopMode.Brake)
        bitbot.goms(BBDirection.Forward, 54, 4000)
    }
    bitbot.ledRainbow()
    bitbot.ledRotate()
    bitbot.goms(BBDirection.Forward, randint(30, 70), randint(30, 70))
    for (let index = 0; index < 4; index++) {
        bitbot.rotatems(BBRobotDirection.Left, 60, 3000)
        bitbot.goms(BBDirection.Forward, 60, 400)
    }
    bitbot.stop(BBStopMode.Brake)
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
})
bitbot.setLedColor(bitbot.convertRGB(150, 0, 120))
bitbot.ledBrightness(40)
bitbot.goms(BBDirection.Forward, 65, 1500)
bitbot.rotatems(BBRobotDirection.Right, 38, 1700)
bitbot.stop(BBStopMode.Brake)
bitbot.goms(BBDirection.Forward, 51, 2500)
bitbot.stop(BBStopMode.Brake)
basic.forever(function () {
    while (bitbot.sonar(BBPingUnit.Centimeters) > 20) {
        music.playMelody("C5 C5 C5 - - - - - ", 120)
        bitbot.stop(BBStopMode.Brake)
        bitbot.rotatems(BBRobotDirection.Left, 55, 5000)
    }
})
