import './button.css';

// Deze kan mss nog gerefactord worden als search button ook klaar is

const Button = function ({ buttonType, option, onClick }) {
    return (
        buttonType === 'option-button' ?
            <button
                type='button'
                className={buttonType}
                onClick={() => {
                    option === 'all countries' ? onClick(true) : onClick(false)
                }}
            >
                {option}
            </button>
            :
            <button type='button'
                className={buttonType}
                onClick={onClick}>
                {option}
            </button>
);
}

export default Button;
