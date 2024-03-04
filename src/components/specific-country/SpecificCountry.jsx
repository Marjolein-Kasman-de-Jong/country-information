import './specific-country.css';
import WorldMap from '../world-map/WorldMap';
import CountryCard from '../country-card/CountryCard';
import Button from '../button/Button';
import roundToMillion from '../../helpers/roundToMillion';
import { useState } from 'react';

const SpecificCountry = function ({ userChoice, countryData, fetchData }) {
    const [query, setQuery] = useState('');

    let data;
    // Checks if countryData.data exists and has at least 1 element before trying to use it
    if (countryData && countryData.data && countryData.data.length > 0) {
        data = countryData.data[0];
    }

    function handleChange(e) {
        setQuery(e.target.value);
    }

    return (
        <main>
            <section className="search-country-information">
                {/* World map */}
                <WorldMap />
                {/* Country card */}
                <div className="specific-country-container">
                    <div className="search-field">
                        <input
                            type="search"
                            name="query"
                            placeholder="Netherlands"
                            value={query}
                            onChange={handleChange}
                        />
                        <Button
                            buttonType='fetch-data-button'
                            option='Find country'
                            onClick={() => fetchData(query)}
                        />
                    </div>
                    {data &&
                        <CountryCard
                            userChoice={userChoice}
                            country={data.name.common}
                            flag={data.flags.svg}
                            population={roundToMillion(data.population)}
                            continent={data.subregion}
                            capital={data.capital[0]}
                            borders={data.borders.length}
                            domain={data.tld}
                        />
                    }
                </div>
            </section>
        </main>
    );
}

export default SpecificCountry;