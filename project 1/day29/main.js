//utilites
randomColor = () => {
  return Math.floor(Math.random() * 256)
}
const wrapperEl = document.createElement("div")
wrapperEl.style.diplay = "flex"
wrapperEl.innerHTML = `<div class="wrapper">
 <span>30 DAYS OF <span class='break'>JAVASCRIPT</span> CHALLENGE 2020 <span>ASABENEH YETAYEH</span></span>
 </div>`
wrapperEl.style.alignItems = "center"
wrapperEl.style.justifyContent = "flex-end"
wrapperEl.style.flexDirection = "column"
wrapperEl.style.flexWrap = "wrap"
wrapperEl.style.marginTop = "5rem"
wrapperEl.style.marginLeft = "15rem"
wrapperEl.style.height = "25rem"
wrapperEl.style.width = '50rem'
wrapperEl.style.paddingLeft = "3rem"
wrapperEl.style.paddingTop = "3rem"
wrapperEl.style.backgroundColor = 'green'
wrapperEl.style.fontSize = "4rem"
wrapperEl.style.transition = 'all 2s ease-in-out'
let j = 0
setInterval(() => {
  wrapperEl.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`
  const sentence = wrapperEl.textContent
  wrapperEl.innerHTML = ""
  sentence.split('').forEach(value => {
    const newEl = document.createElement('span')
    newEl.textContent = value
    newEl.style.color = `rgb(${randomColor()},${randomColor()},${randomColor()})`
    wrapperEl.appendChild(newEl)
  })
  const spanEl = document.querySelectorAll('span')
  if (j === 0) {
    spanEl[11].innerHTML += '<br>'
    spanEl[22].innerHTML += '<br>'
    j += 1
  } else if (j == 1) {
    spanEl[11].innerHTML = ''
    spanEl[22].innerHTML = ''
    spanEl[22].textContent = " "
    spanEl[11].textContent = " "
    j -= 1
  }
}, 2000)
document.querySelector('body').append(wrapperEl)
console.log(wrapperEl)
