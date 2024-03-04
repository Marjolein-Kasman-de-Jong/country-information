import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header/Header';
import AllCountries from './components/all-countries/AllCountries';
import SingleCountry from './components/single-country/SingleCountry';
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
            const response = await axios.get(`https://restcountries.com/v3.1/name/${query}?fullText=true`);
            setSingleCountryData(response);
        } catch {
            throw error;
        }
    }

    return (
        <div className='content-wrapper'>
            {/* Header */}
            <Header setUserChoice={setUserChoice} />
            {/* Main */}
            {userChoice ? <AllCountries userChoice={userChoice} countryData={allCountriesData} fetchData={getAllCountries} /> : <SingleCountry userChoice={userChoice} countryData={singleCountryData} fetchData={getSingleCountry} setSingleCountryData={setSingleCountryData}/>}
        </div>
    )
}

export default App;