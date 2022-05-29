
const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const CountriesHTML = countries.map(country => getCountryHTML(country));

    // console.log(CountriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = CountriesHTML.join(' ');
    //Hide preloader after loading js...
    const preloader = document.querySelector('#loading');
    preloader.style.display = "none";
}

//option 3

const getCountryHTML = ({ name, flags, region }) => {

    return `
        <div class="country">
            <h2>${name}</h2>
           
            <p>Continent: ${region}</p>
            <img src="${flags.png}">
          
        </div>
    `;
}


/*
        option 1

const getCountryHTML = country => {
    

    return `
        <div class="country">
            <h2>${country.name}</h2>
            <img src="${country.flags.png}">
        </div>
    `;
}*/
/*const getCountryHTML = country => {

    //option 2
    const {name, flags} = country;

    return `
        <div class="country">
            <h2>${name}</h2>
            <img src="${flags.png}">
        </div>
    `;
}
*/


loadCountries();
