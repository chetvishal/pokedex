import React from 'react';

function Navbar() {

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Pokedex</a>
                <div className="row" id="topbarsearch">
                    <div className="input-field col s3 s3 red-text right">
                        <input type="text" placeholder="Search" id="autocomplete-input" className="autocomplete red-text" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;