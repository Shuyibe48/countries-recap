const countryWrapper = document.getElementById('countries')

const allCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showDataOnDisplay(data))
}

allCountries()


const showDataOnDisplay = countries => {
    const allCountry = countries.map(country => makeDynamicHTML(country))
    countryWrapper.innerHTML = allCountry.join(' ')
}

const makeDynamicHTML = data => {
    return `
        <div class="country">
            <h2>${data.name.common}</h2>
            <h3>${data.capital}</h3>
            <h4>${data.continents}</h4>
            <img src="${data.flags.png}">
        </div>
    `
} 