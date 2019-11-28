function ezDate(hours = 0, minutes = 0, seconds = 0) {
    this.seconds = seconds
    this.minutes = minutes
    this.hours = hours

    this.recalculate()

    return this
}

ezDate.prototype.recalculate = function() {
    const seconds = this.seconds
    this.seconds = seconds < 60 ? seconds : seconds % 60

    const minutes = this.minutes
    this.minutes = (minutes + parseInt(seconds / 60)) % 60

    this.hours = this.hours + (parseInt(minutes / 60) % 60)
}

ezDate.prototype.set = function(hours, minutes, seconds) {
    this.seconds = seconds
    this.minutes = minutes
    this.hours = hours
    this.recalculate()

    return this
}

ezDate.prototype.setSeconds = function(seconds) {
    this.seconds = seconds
    this.recalculate()

    return this
}

ezDate.prototype.setMinutes = function(minutes) {
    this.minutes = minutes
    this.recalculate()

    return this
}

ezDate.prototype.setHours = function(hours) {
    this.hours = hours

    return this
}

ezDate.prototype.addSeconds = function(seconds) {
    this.seconds = this.seconds + seconds
    this.recalculate()

    return this
}

ezDate.prototype.addMinutes = function(minutes) {
    this.minutes = this.minutes + minutes
    this.recalculate()

    return this
}

ezDate.prototype.addHours = function(hours) {
    this.hours = this.hours + hours

    return this
}

ezDate.prototype.getSeconds = function() {
    return this.seconds
}

ezDate.prototype.getMinutes = function() {
    return this.minutes
}

ezDate.prototype.getHours = function() {
    return this.hours
}

ezDate.prototype.getTime = function(type = { precedingZero: false }) {
    if (type.precedingZero) {
        const isTwoDigitS = this.seconds < 10 ? `0${this.seconds}` : this.seconds
        const isTwoDigitsM = this.minutes < 10 ? `0${this.minutes}` : this.minutes
        const isTwoDigitsH = this.hours < 10 ? `0${this.hours}` : this.hours
        console.log(`${isTwoDigitsH}:${isTwoDigitsM}:${isTwoDigitS}`)
    } else {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }

    return this
}

const date = new ezDate(1, 0, 50)
date.addSeconds(25).addHours(2).addMinutes(65).getTime({ precedingZero: true })
