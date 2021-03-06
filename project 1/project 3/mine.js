onst randomNo = (max = 255, min = 0) => Math.round(Math.random() * (max - min) + min)
// selectors
const bodyEl = document.querySelector('body')
const wrapperEl = document.querySelector('.wrapper')
const headerEl = document.querySelector('header')
const h1El = document.querySelector('h1')
h1El.innerHTML = h1El.textContent.replace(/\d+/, '').trim() + ` <span id="year">${new Date().getFullYear()}</span>`
const yearEl = document.getElementById('year')
headerEl.innerHTML += '<p><span id="time">June 15, 2021 2:43:45</span></p>'
const timeEl = document.querySelector('#time')
const taskEls = document.querySelectorAll('li')

//style

bodyEl.style.fontFamily = 'Avenir, Segoe ui, Ubuntu, Sans-serif'

wrapperEl.style.maxWidth = '40rem'
wrapperEl.style.margin = 'auto'
headerEl.style.textAlign = 'center'
h1El.style.marginBottom = '-1rem'
document.getElementById('year').style.fontSize = '4rem'
document.getElementById('time').style.padding = '0.25rem 1.5rem'
taskEls.forEach(taskEl => {
  const taskText = taskEl.textContent
  taskEl.style.listStyleType = 'none'
  taskEl.style.padding = '1.5rem 1.8rem'
  taskEl.style.marginBottom = '2px'
  taskEl.style.fontSize = '0.6rem'