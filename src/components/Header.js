import React from 'react';

const Header = ({darkModeHandler, isDark}) => {
    return (
        <header>
            <div className="container row">
                <div className="header__logo">
                    <a href="/">Where in the world?</a>
                </div>
                <div className="header__toggle">
                    <button onClick={() => darkModeHandler()}><i className={isDark === true ? "fas fa-moon" : "far fa-moon"}></i> Dark Mode</button>
                </div>
            </div>    
        </header>
    )
}

export default Header
