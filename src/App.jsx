import './App.css';
import { useState } from 'react';
import Header from './components/header/Header';
import AllCountries from './components/all-countries/AllCountries';
import SpecificCountry from './components/specific-country/SpecificCountry';
import axios from 'axios';



function App() {

    const [userChoice, setUserChoice] = useState(true);
    const [countryData, setCountryData] = useState({});

    async function fetchData() {
        try {
            let response = await axios.get('https://restcountries.com/v3.1/all');
            setCountryData(response);
        } catch {
            console.error(error);
        }
    }

    return (
        <>
            <Header setUserChoice={setUserChoice} />
            {userChoice ? <AllCountries countryData={countryData} fetchData={fetchData} /> : <SpecificCountry />}
        </>
    )
}

export default App
