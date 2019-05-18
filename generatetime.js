function generateTime() {
  this.hours;
  this.minutes;
  this.seconds;
  this.passedFromSeconds = 0;
  this.passedFromMinutes = 0;

  return this;
}
generateTime.prototype.setSeconds = function( seconds ) {
  let remaining = parseInt(seconds),
      pass = 0;
      
  while (remaining - 60 >= 0) {
    pass++;
    remaining = remaining - 60;
  }

  if (pass > 0) this.passedFromSeconds = pass;
  this.seconds = remaining;
  return this;
}
generateTime.prototype.setMinutes = function( minutes ) {
  let remaining = parseInt(minutes) + this.passedFromSeconds,
      pass = 0;
  
  while (remaining - 60 >= 0) {
    pass++;
    remaining = remaining - 60;
  }

  if (pass > 0) this.passedFromMinutes = pass;
  this.minutes = remaining;
  return this;
}
generateTime.prototype.setHours = function( hours ) {
  this.hours = parseInt(hours) + this.passedFromMinutes;
  return this;
}
generateTime.prototype.getSeconds = function() {
  return this.seconds;
}
generateTime.prototype.getMinutes = function() {
  return this.minutes;
}
generateTime.prototype.getHours = function() {
  return this.hours;
}
generateTime.prototype.returnTimeFormat = function() {
  let s = this.seconds < 10 ? `0${this.seconds}` : this.seconds,
      m = this.minutes < 10 ? `0${this.minutes}` : this.minutes, 
      h = this.hours < 10 ? `0${this.hours}` : this.hours;
  return `${h}:${m}:${s}`;
}

window.addEventListener('load', function() {
  const t = new generateTime();

  t.setSeconds( 100 );
  t.setMinutes( 80 );
  t.setHours( 20 );
    
  console.log(t.returnTimeFormat()) // 21:21:40
  console.log(t.getMinutes()) // 21
});
