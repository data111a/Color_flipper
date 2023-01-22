const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const privColor = localStorage.getItem('hexColor')
const resetBtn = document.getElementById('reset')
document.body.style.backgroundColor = privColor
color.textContent = privColor

btn.addEventListener('click',()=>{
    let hexColor = '#'
    for(let i = 0; i < 6; i++){
        let randomNum = Math.floor(Math.random() * hex.length)
        hexColor += hex[randomNum]
        color.textContent = hexColor
        document.body.style.backgroundColor = hexColor
    }
    localStorage.setItem('hexColor',hexColor)
})

resetBtn.addEventListener('click',()=>{
    color.textContent = '#000000'
    document.body.style.backgroundColor = '#000000'
    localStorage.setItem('hexColor','#000000')
})



