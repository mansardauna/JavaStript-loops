
const planets = ['earth', 'jupiter', 'mars', 'mercury', 'moon', 'neptune', 'pluto', 'saturn', 'uranus', 'venus'];
const planetDivisors = {
  earth: 2.2046,
  jupiter: 2.1,
  mars: 2.2,
  mercury: 2.3,
  moon: 3,
  neptune: 2.11,
  pluto: 1.8,
  saturn: 2.22,
  uranus: 1,
  venus: 2.8
}
const planetUrl = './img/'

const selectEl = document.querySelector('select')
planets.forEach(planet => {
  selectEl.innerHTML += `<option value="${planet}">${planet}</option>`
})

const infoEl = document.querySelector('div')
const planetEl = document.querySelector('img')
selectEl.addEventListener('change', event => {
  const selectedPlanet = event.target.value
  infoEl.classList.add('hide')
  planetEl.classList.remove('hide')

  planetEl.setAttribute('src', `${planetUrl}/${selectedPlanet}.png`)
})

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()

  const mass = event.target.mass.value
  const planet = event.target.planet.value
  infoEl.classList.remove('hide')

  if (!planet || !planets.includes(planet)) {
    infoEl.innerText = "Select a planet!"
    return
  }

  const weight = Number(mass) / planetDivisors[planet]
  infoEl.textContent = `The weight of object on ${planet.toUpperCase()} is ${weight.toFixed(2)}`
})