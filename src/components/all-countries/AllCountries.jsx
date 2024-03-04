import './all-countries.css';
import WorldMap from '../world-map/WorldMap';
import CountryCard from '../country-card/CountryCard';
import Button from '../button/Button';

const AllCountries = function ({ userChoice, countryData, fetchData }) {
    const data = countryData.data;

    return (
        <main>
            <section className="world-regions">
                {/* World map */}
                <WorldMap />
                {/* Country cards */}
                <div className="country-cards-container">
                    {/* Render either country cards or button */}
                    {
                        data ?
                            data.map(country => {
                                return (
                                    <CountryCard
                                        userChoice={userChoice}
                                        key={country.name.common}
                                        country={country.name.common}
                                        flag={country.flags.svg}
                                        population={country.population}
                                        continent={(country.region).toLowerCase()}
                                    />
                                )
                            })
                            :
                            <Button
                                buttonType='fetch-data-button'
                                option='Get me data on all countries in the world please!'
                                onClick={fetchData}
                            />
                    }
                </div>
            </section>
        </main>
    );
}

export default AllCountries;
