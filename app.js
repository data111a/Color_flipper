const colors = ["green", "Red",'Gold','Pink','Orange','Yellow','Purple','Green','Brown','White','Gray']
const btn = document.getElementById('btn')
const color = document.querySelector(".color")
const privColor = localStorage.getItem('color')
const resetBtn = document.getElementById('reset')
document.body.style.backgroundColor = privColor
color.textContent = privColor


btn.addEventListener('click',()=>{
    let randomNum = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomNum]
    color.textContent = colors[randomNum]
    localStorage.setItem('color',colors[randomNum])
    
})

resetBtn.addEventListener('click',()=>{
    color.textContent = 'White'
    document.body.style.backgroundColor = 'White'
    localStorage.setItem('color','White')
})