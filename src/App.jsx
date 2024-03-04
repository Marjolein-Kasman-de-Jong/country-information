import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Header from './components/header/Header';
import AllCountries from './components/all-countries/AllCountries';
import SpecificCountry from './components/specific-country/SpecificCountry';
import sortByPopulationSize from './helpers/sortByPopulationSize';

function App() {

    const [userChoice, setUserChoice] = useState(true);
    const [allCountriesData, setAllCountriesData] = useState({});
    const [singleCountryData, setSingleCountryData] = useState({});

    async function getAllCountries() {
        try {
            // Get all country data 
            const response = await axios.get('https://restcountries.com/v3.1/all');
            // Sort countries by population size
            sortByPopulationSize(response);
            // Set country data
            setAllCountriesData(response);
        } catch {
            console.error(error);
        }
    }

    async function getSingleCountry(query) {
        try {
            // Get single country data 
            const response = await axios.get(`https://restcountries.com/v3.1/name/${query}`);
            setSingleCountryData(response);
        } catch {
            // setSingleCountryData(error);
            console.error(error);
        }
    }

    return (
        <div className='content-wrapper'>
            {/* Header */}
            <Header setUserChoice={setUserChoice} />
            {/* Main */}
            {userChoice ? <AllCountries userChoice={userChoice} countryData={allCountriesData} fetchData={getAllCountries} /> : <SpecificCountry userChoice={userChoice} countryData={singleCountryData} fetchData={getSingleCountry} />}
        </div>
    )
}

export default App;