
document.getElementById('countriesCount').textContent = countries.length

const dataEl = document.getElementById('data')

function populationData() {
  const worldPopulation = countries.reduce((acc, cur) => acc + cur.population, 0)

  const mostPopulated = countries
    .sort((a, b) => b.population - a.population)
    .slice(0, 10)

  dataEl.innerHTML = `<span>World</span>
    <div>
      <span style="width: 100%"></span>
    </div>
    <span>${worldPopulation.toLocaleString()}</span>`
  mostPopulated.forEach(country => {
    dataEl.innerHTML += `<span>${country.name}</span>
    <div>
      <span style="width: ${parseInt(country.population * 100 / worldPopulation)}%"></span>
    </div>
    <span>${country.population.toLocaleString()}</span>`
  })
}
function languageData() {
  const worldLang = new Set(countries.map(
    ({
      languages
    }) => languages).flat()).size

  dataEl.innerHTML = ''
  languages = {}
  countries.forEach(({
    languages: lang
  }) => {
    lang.forEach(language => {
      if (languages[language]) {
        languages[language]++
      } else {
        languages[language] = 1
      }
    })

  })
  const mostSpoken = Object.entries(languages)
  const tenMostSpoken = mostSpoken.map(
    value => ({
      language: value[0],
      count: value[1]

    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)

  dataEl.innerHTML = `<span>world</span>
      <div>
      <span style='width: 100%'></span>
      </div>
      <span>${worldLang.toLocaleString()}</span>`

  tenMostSpoken.forEach(({
    language,
    count
  }) => {
    dataEl.innerHTML += `<span>${language}</span>
          <div>
          <span style='width:${parseInt(count * 100 / worldLang)}%'>
          </span>
          </div>
          <span>${count}</span>`
  })
    .document.querySelector('#data-info').textContent = '10 most spoken Language in the world'
}

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', (event) => {
    const clicked = event.target.textContent.toLowerCase()

    if (clicked === 'population') {
      populationData()
    }
    if (clicked === 'languages') {
      languageData()


    }
  })
})


populationData()

// return



languageData()