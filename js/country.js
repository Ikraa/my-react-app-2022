const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
//  console.log(countries[0]);

 const countriesHTML = countries.map(country => getCountryHTML(country));
//   console.log(countriesHTML[0]);
 const containar = document.getElementById('countries')
 containar.innerHTML = countriesHTML.join(' ');
 }

 const getCountryHTML =({name, flags, area, region}) => 
 {
    return `
    <div class="country">
    <h2>${name.common}</h2>
    <p>Area: ${area} </p>
    <p>Continet: ${region}</p>
    <img src="${flags.png}">
    </div>
    `
 }

loadCountries();