const hour = document.getElementById('hour-num')
const minute = document.getElementById('minute-num')
const second = document.getElementById('second-num')

setInterval(() => {
  let date = new Date
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds() 

  hour.innerHTML = h  < 10 ? `0${h}` : h
  minute.innerHTML = m < 10 ? `0${m}` : m
  second.innerHTML = s < 10 ? `0${s}` : s
}) 

