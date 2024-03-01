import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Header from './components/header/Header';
import AllCountries from './components/all-countries/AllCountries';
import SpecificCountry from './components/specific-country/SpecificCountry';
import sortByPopulationSize from './helpers/sortByPopulationSize';

function App() {

    const [userChoice, setUserChoice] = useState(true);
    const [countryData, setCountryData] = useState({});

    async function fetchData() {
        try {
            // Get country data 
            const response = await axios.get('https://restcountries.com/v3.1/all');
            // Sort countries by population size
            sortByPopulationSize(response);
            // Set country data
            setCountryData(response);
        } catch {
            console.error(error);
        }
    }

    return (
        <div className='content-wrapper'>
            {/* Header */}
            <Header setUserChoice={setUserChoice} />
            {/* Main */}
            {userChoice ? <AllCountries countryData={countryData} fetchData={fetchData} /> : <SpecificCountry />}
        </div>
    )
}

export default App;