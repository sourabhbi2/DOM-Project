const randomColor = () => {
  const hex = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)]

  }
  return color;
};
let intervalId;
document.querySelector('#start').addEventListener('click', () => {
  intervalId = setInterval(() =>{
    document.body.style.backgroundColor = randomColor();
  }, 1000)
  document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(intervalId)
    intervalId = null;
  })
  
})
