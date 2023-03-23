radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Heart)
    basic.showNumber(receivedNumber)
    group = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    group += 1
    radio.setGroup(group)
    basic.showNumber(group)
    basic.showString(密碼)
    radio.sendNumber(group)
    radio.sendString(密碼)
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Happy)
    basic.showString(receivedString)
    密碼 = receivedString
})
let 密碼 = ""
let group = 0
radio.setGroup(1)
group = 0
密碼 = "abc123"
basic.forever(function () {
	
})
