const clock = document.getElementById('clock')



//very important method in js : setInterval method: it will call the function every second

setInterval(() => {
    const date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000) // 1000ms = 1s