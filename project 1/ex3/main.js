const containerEl = document.querySelector(".container");
const buttonEl = document.querySelectorAll(".active");
const inputEl = document.querySelector("input");
const imgEls = document.querySelectorAll("button img");
containerEl.style.display = "grid";
containerEl.style.gridTemplateColumns = `repeat(6,1fr)`;
containerEl.style.gridGap = "0.6rem";
let mappedCountry;
let searchBy = "";
const sortCountryData = (countrys) => {
  containerEl.innerHTML = "";
  countrys.forEach(({ name, languages, flag, capital, population }) => {
    const newEl = document.createElement("div");
    newEl.classList.add("new-div");
    newEl.innerHTML = ` <img  class='flag'src="${flag}" alt="">
        <div id='name'>${name}</div>
        <div class="inner-wrapper">
            <span>Capital:${capital}</span>
            <span class='lang'>Language:${languages}</span>
            <span class='pop'>Population:${population}</span>
        </div>`;
    containerEl.appendChild(newEl);
  });
};
const searchWith = (by, inputVal) => {
  if (by === "NAME") {
    mappedCountry = countries.filter(({ name }) =>
      name.toLowerCase().startsWith(inputVal.toLowerCase())
    );
  } else if (by === "CAPITAL") {
    mappedCountry = countries.filter(({ capital }) => {
      return capital.toLowerCase().startsWith(inputVal.toLowerCase());
    });
  } else if (by == "POPULATION") {
    let filteredCountry = countries.filter(({ name }) => {
      return name.toLowerCase().startsWith(inputVal.toLowerCase());
    });
    mappedCountry = filteredCountry.sort((a, b) => b.popualtion - a.population);
  }
  sortCountryData(mappedCountry);
};
buttonEl.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const buttonText = btn.textContent;
    if (buttonText !== searchBy) {
      searchBy = buttonText;
      buttonEl.forEach((item, itemIndex) => {
        console.log(imgEls[itemIndex]);
        imgEls[itemIndex].classList.contains("show")
          ? imgEls[itemIndex].classList.remove("show")
          : "";
      });
      btn.children[1].classList.add("show");
      btn.children[1].classList.contains("rotate")
        ? btn.children[1].classList.remove("rotate")
        : btn.children[1].classList.add("rotate");
    } else {
      btn.children[1].classList.contains("rotate")
        ? btn.children[1].classList.remove("rotate")
        : btn.children[1].classList.add("rotate");
    }
  });
});
inputEl.addEventListener("input", (e) => {
  console.log(searchBy.length);
  if (searchBy) {
    searchWith(searchBy.trim(), e.target.value);
  }
});
const dataEl = document.getElementById("data");
function populationData(data) {
  const worldPopulation = countries.reduce(
    (acc, cur) => acc + cur.population,
    0
  );
  const mostPopulated = data.sort((a, b) => b.population - a.population);
  dataEl.innerHTML = `<span>World</span>
      <div>
        <span style="width: 100%"></span>
      </div>
      <span>${worldPopulation.toLocaleString()}</span>`;
  mostPopulated.forEach((country) => {
    dataEl.innerHTML += `<span>${country.name}</span>
      <div>
        <span style="width:${(country.population * 100) / worldPopulation
      }%"></span>
      </div>
      <span>${country.population.toLocaleString()}</span>`;
  });
}
function languageData(data) {
  const worldLang = new Set(countries.map(({ languages }) => languages).flat())
    .size;
  dataEl.innerHTML = "";
  languages = {};
  data.forEach(({ languages: lang }) => {
    lang.forEach((language) => {
      if (languages[language]) languages[language]++;
      else languages[language] = 1;
    });
  });
  const mostSpoken = Object.entries(languages);
  const tenMostSpoken = mostSpoken
    .map((value) => ({ language: value[0], count: value[1] }))
    .sort((a, b) => b.count - a.count);
  dataEl.innerHTML = `
           <span>World</span>
        <div>
          <span style="width: 100%"></span>
        </div>
         <span>${worldLang.toLocaleString()}</span>
           `;
  tenMostSpoken.forEach(({ language, count }) => {
    dataEl.innerHTML += `<span> ${language} </span>
                <div>
                    <span style = "width:${(count * 100) / worldLang
      }%"></span>
                    </div>
                    <span> ${count} </span>
               `;
  });
}
document.querySelectorAll(".popul").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const clicked = event.target.textContent.toLowerCase();
    if (clicked === "population") {
      populationData(mappedCountry);
    }
    if (clicked === "languages") {
      languageData(mappedCountry);
    }
  });
});