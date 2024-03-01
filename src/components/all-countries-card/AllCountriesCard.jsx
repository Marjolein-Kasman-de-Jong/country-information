import './all-countries-card.css';

const AllCountriesCard = function ({ country, flag, population, continent }) {
    return (
        <article className='all-countries-card'>
            <header className='all-countries-card-header'>
                <span className='flag-wrapper'>
                    <img src={flag} alt={`Flag of ${country}`} />
                </span>
                <h2 className={continent}>{country}</h2>
            </header>
            <p>{`Has a population of ${population} people`}</p>
        </article>
    );
}

export default AllCountriesCard;