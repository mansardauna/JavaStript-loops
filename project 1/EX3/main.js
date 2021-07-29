var fontFace = ['Time New Roman', 'BlinkMacSystemFont', 'Arial', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'];

var fontWeight = ['100', '200', '300', '400', '500', '600', '700']



randomColor = () => {
  return Math.floor(Math.random() * 256)
}
const wrapperEl = document.createElement("div")
wrapperEl.style.diplay = "flex"
wrapperEl.innerHTML = `<div class="wrapper"><span>
CONGRATULATIONS!
</span>
 </div>`
wrapperEl.style.alignItems = "center"
wrapperEl.style.margin = 'auto'
wrapperEl.style.height = "25rem"
wrapperEl.style.justifyContent = 'center'
wrapperEl.style.width = 'fit-content'
wrapperEl.style.fontSize = "4rem"
wrapperEl.style.transition = 'all 2s ease-in-out'

setInterval(() => {
  var num = fontFace[Math.floor(Math.random() * fontFace.length)];
  var fontWeight = ['100', '200', '300', '400', '500', '600', '700']
  wrapperEl.style.fontFamily = `${num}`

  var tickness = fontWeight[Math.floor(Math.random() * 7)]
  wrapperEl.style.fontWeight = tickness;
  const sentence = wrapperEl.textContent
  wrapperEl.innerHTML = ""
  sentence.split('').forEach(value => {
    const newEl = document.createElement('span')
    newEl.textContent = value

    newEl.style.color = `rgb(${randomColor()},${randomColor()},${randomColor()})`
    wrapperEl.appendChild(newEl)
  })
}
  , 2000)
document.querySelector('body').append(wrapperEl)
