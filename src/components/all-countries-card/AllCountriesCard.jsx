import './all-countries-card.css';

const AllCountriesCard = function ({ country, flag, population, continent }) {
    return (
        <article className='all-countries-card'>
            <header className='all-countries-card-header'>
                {/* Country flag */}
                <span className='flag-wrapper'>
                    <img src={flag} alt={`Flag of ${country}`} />
                </span>
                {/* Country name */}
                <h2 className={`country-name ${continent}`}>{country}</h2>
            </header>
            {/* Country population */}
            <p>{`Has a population of ${population} people`}</p>
        </article>
    );
}

export default AllCountriesCard;