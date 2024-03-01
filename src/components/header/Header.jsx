import Button from '../button/Button';
import './header.css';

const Header = function ({ setUserChoice }) {
    return (
        <header>
            <hgroup>
                <h1>country information</h1>
                <p>Learn about all countries in the world...or about only one.</p>
            </hgroup>
            <div className='button-container'>
                <Button option="all countries" setUserChoice={setUserChoice} />
                <Button option="specific country" setUserChoice={setUserChoice} />
            </div>
        </header>
    );
}

export default Header;