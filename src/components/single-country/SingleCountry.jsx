import { useState } from 'react';
import './single-country.css';
import WorldMap from '../world-map/WorldMap';
import CountryCard from '../country-card/CountryCard';
import Button from '../button/Button';
import roundToMillion from '../../helpers/roundToMillion';

const SingleCountry = function ({ userChoice, countryData, setSingleCountryData, fetchData }) {
    const [query, setQuery] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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
            <section className="single-country-information">
                {/* World map */}
                <WorldMap />
                {/* Country card */}
                <div className="single-country-container">
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
                            onClick={async () => {
                                try {
                                    // Resets singleCountryData to make previously rendered CountryCard disappear  
                                    setSingleCountryData({});
                                    await fetchData(query);
                                } catch (error) {
                                    setErrorMessage(`${query} does not exist. Try again.`);
                                }
                            }}
                        />
                    </div>
                    {data && data.name.common ?
                        <CountryCard
                            userChoice={userChoice}
                            country={data.name.common}
                            flag={data.flags.svg}
                            population={roundToMillion(data.population)}
                            continent={data.subregion ? data.subregion : 'an unknown region'}
                            capital={data.capital ? data.capital[0] : 'unknown'}
                            borders={data.borders ? data.borders.length : 'an unknown amount of'}
                            domain={data.tld}
                        />
                        :
                        <p className="error-message">{errorMessage}</p>
                    }
                </div>
            </section>
        </main>
    );
}

export default SingleCountry;