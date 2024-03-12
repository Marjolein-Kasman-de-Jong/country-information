import './country-card.css';

const CountryCard = function ({ userChoice, country, flag, population, continent, capital, borders, domain }) {
    return (
        <article className={`${userChoice ? 'all-countries' : 'single-country'} country-card`}>
            <header className='country-card-header'>
                {/* Country flag */}
                <span className='flag-wrapper'>
                    <img src={flag} alt={`Flag of ${country}`} />
                </span>
                {/* Country name */}
                <h2 className={`country-name ${continent}`}>{country}</h2>
            </header>
            {/* All countries card / single country card */}
            {userChoice ?
                <p>{`Has a population of ${population} people`}</p>
                :
                <p>{`${country} is situated in ${continent} and the capital is ${capital}. It has a population of ${population} million people and it borders with ${borders} neighboring countries. Websites can be found on ${domain} domains.`}</p>}
        </article>
    );
}

export default CountryCard;