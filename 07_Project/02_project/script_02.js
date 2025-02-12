const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const weight = parseFloat(document.querySelector('#weight').value)
    const height = parseFloat(document.querySelector('#height').value)
    const results = document.querySelector('#results')

    if(height === '' || height <= 0 || weight === '' || weight <= 0 || isNaN(height) || isNaN(weight)){
        results.innerHTML = `Please fill out all fields correctly ${weight} ${height}`
    }else{
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2)
        console.log(bmi);
        results.innerHTML = `<span>Your BMI is : ${bmi} </span>`       
    }
})

