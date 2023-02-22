export function createMarkupCountryCard(country) {
    return country.map(c =>
            `
    <div class="card">
    <p class="country_name">
        <span class="country_flag">
        <img src="${c.flags.svg}" width="30px" height="20px">
        </span> <b>${c.name.official}</b>
    </p>
    <p class="country_descr"> <b>Capital:</b> ${c.capital}</p>
    <p class="country_descr"> <b>Population:</b> ${c.population}</p>
    <p class="country_descr"> <b>Languages:</b> ${Object.values(c.languages).join(', ')}</p>
</div>
    `
        ).join('');
};

export function createMarkupCountryList(country) {
    return country.map(c =>
           `
    <li>
        <p class="country_name">
        <span class="country_flag">
        <img src="${c.flags.svg}" width="30px" height="20px">
        </span> <b>${c.name.official}</b>
        </p>
    </li>
        `).join('');
};

