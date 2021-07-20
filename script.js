let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')
let clock =  document.querySelector('.relogio')
let inputHora =  document.querySelector('.hora')
let inputMinuto = document.querySelector('.minuto')
let sh =  document.querySelector('.sh')
let sm =  document.querySelector('.sm')
let audioElement = document.querySelector(`#alarm`)
let arrayH = []
let arrayM = []





function upadateClock(){
    let now =  new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    
    if (hour == `${arrayH}` && minute == `${arrayM}`) {
      
        audioElement.play()
    } 
    
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    let sDeg = ((360 / 60) * second) -90
    let mDeg = ((360 / 60) * minute) -90
    let hDeg = ((360 / 12) * hour) - 90

   sElement.style.transform = `rotate(${sDeg}deg)`
   mElement.style.transform = `rotate(${mDeg}deg)`
   hElement.style.transform = `rotate(${hDeg}deg)`


  
}

function setAlarm(){
    var setHour = inputHora.value
    var setMinuto =  inputMinuto.value

    if (inputHora.value == '' && inputMinuto.value == ''){
        alert('Insira um valor')
    } else {
    arrayH.splice(0)
    arrayH.push(setHour)
    arrayM.splice(0)
    arrayM.push(setMinuto)
      inputHora.value = ''
    inputMinuto.value = '' 
        
    
    let ds = document.querySelector('.ds')
    let criarH2 = document.createElement("h2")
    let textH2 = document.createTextNode(`Alarme definido para: ${arrayH} hora(s) e ${arrayM} minuto(s)`)

    
    

        
    criarH2.appendChild(textH2)
    ds.appendChild(criarH2)
}

}   



function fixZero(time){
    return time < 10 ? `0${time}` :  time
}

function parar(){
      audioElement.pause()
}



setInterval(upadateClock, 1000)
upadateClock()




sh.setAttribute("onclick", 'setAlarm()')


