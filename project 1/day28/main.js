const deleteEl = document.querySelector('.delete')
const buttonEl = document.querySelector("button")
const inputEl = document.querySelectorAll("input")
const pEl = document.querySelector("p")
const personEl = document.querySelector(".inner1")
container2El = document.querySelector('.container2')
buttonEl.addEventListener("click", e => {
  inputEl.forEach(input => {
    if (!input.value) {
      pEl.textContent = "All fields required"
      pEl.style.color = 'red'
      setTimeout(() => {
        pEl.textContent = ''
      }, 2000)
    }
  })
  if (inputEl[0].value && inputEl[1].value && inputEl[2].value && inputEl[3].value) {
    const newEl = document.createElement("div")
    newEl.classList.add('inner1')
    newEl.innerHTML = `<div class="inner2">
            <span>${inputEl[0].value} ${inputEl[1].value}</span>
            <span>JUN 30 2021 10:51</span>
            </div>
            <span class="nation">${inputEl[2].value}</span>
            <span id="num">${inputEl[3].value}</span>
            <div class="events">
            <div class="round">
              <img class="delete" src="./close-line.svg" alt="">
            </div>
            <div class="round" onclick="buttonClick();"><span id="add">+5</span></div>
            <div class="round"><span>-5</span></div>
          </div>
            </div>`
    console.log(newEl)
    container2El.appendChild(newEl)
    let deleteEls = document.querySelectorAll('.delete')
    let personEls = document.querySelectorAll(".inner1")
    let currentPersonEl = personEls[personEls.length - 1]
    let currentDeleteEl = deleteEls[deleteEls.length - 1]
    currentDeleteEl.addEventListener('click', e => {
      currentPersonEl.remove()
    })
  }
  inputEl.forEach(value => value = "")
})
deleteEl.addEventListener('click', e => {
  personEl.remove()
})
