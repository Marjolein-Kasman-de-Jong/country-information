import './header.css';

const Header = function ({ setUserChoice }) {
    return (
        <header>
            <hgroup>
                <h1>country information</h1>
                <p>Learn about all countries in the world...or about only one.</p>
            </hgroup>
            <div className='button-container'>
                <button type='button' onClick={() => setUserChoice(true)}>all countries</button>
                <button type='button' onClick={() => setUserChoice(false)}>specific country</button>
            </div>
        </header>
    );
}

export default Header;