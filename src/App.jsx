import './App.css';
import { useState } from 'react';
import Header from './components/header/Header';


function App() {

    const [userChoice, setUserChoice] = useState(true);

    return (
        <>
            <Header setUserChoice={setUserChoice} />
            <main>
                {userChoice ? <div className="all-countries">Alle landen</div> : <div className="specific-country">Specifiek land</div>}
            </main>
        </>
    )
}

export default App
