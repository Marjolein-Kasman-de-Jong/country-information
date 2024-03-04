import './header.css';
import Button from '../button/Button';

const Header = function ({ setUserChoice }) {
    return (
        <header className='main-header'>
            <hgroup>
                <h1>country information</h1>
                <p>Learn about all countries in the world...or about only one.</p>
            </hgroup>
            <div className='button-container'>
                <Button buttonType='option-button' option="all countries" onClick={setUserChoice} />
                <Button buttonType='option-button' option="single country" onClick={setUserChoice} />
            </div>
        </header>
    );
}

export default Header;