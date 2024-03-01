import './all-countries.css';
import worldMap from '../../assets/world_map.png';
import Button from '../button/Button';
import AllCountriesCard from '../all-countries-card/AllCountriesCard';

const AllCountries = function ({ countryData, fetchData }) {
    let data = countryData.data;

    return (
        <main>
            <section className="world-regions">
                {/* World map */}
                <span className="world-map-wrapper">
                    <img src={worldMap} alt="World map" />
                </span>
                {/* Country cards */}
                <div className="country-cards-container">
                    {
                        data ?
                            data.map(country => { 
                                return <AllCountriesCard key={country.name.common} country={country.name.common} flag={country.flags.svg} population={country.population} continent={(country.region).toLowerCase()}/> })
                            :
                            <Button buttonType='fetch-data-button' option='Get me data on all countries in the world please!' onClick={fetchData} />
                    }
                </div>
            </section>
        </main>
    );
}

export default AllCountries;
