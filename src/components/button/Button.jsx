import './button.css';

const Button = function ({ option, setUserChoice }) {
    return (
        <button
            type='button'
            onClick={() => {
                option === 'all countries' ? setUserChoice(true) : setUserChoice(false)
            }}
        >
            {option}
        </button>
    );
}

export default Button;