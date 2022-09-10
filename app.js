const colors = ["green", "red", "rgba(133,122,200)", "#f15025", 'crimson', 'grey', 'chartreuse', ' rgb(33, 13, 146)', 'hsl(360, 71%, 66%)'];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})