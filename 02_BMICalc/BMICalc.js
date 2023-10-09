const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  const weight_guide = document.querySelectorAll('.weight-guide')

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTMl = "Please give a valid height."

  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight'
  } else {
    const bmi = (weight / ((height * height / 10000)).toFixed(2)

    weight_guide.forEach((weightGuide) => {
      if (weightGuide.target.id === 'weightGuide') {
        results.innerHTML = `<span>${bmi} ${weightGuide.target.id}</span>`
      }
      if (weightGuide.target.id === 'weightGuide') {
        results.innerHTML = `<span>${bmi} ${weightGuide.target.id}</span>`
      }
      if (weightGuide.target.id === 'weightGuide') {
        results.innerHTML = `<span>${bmi} ${weightGuide.target.id}</span>`
      }
      
      
    })
  }

})