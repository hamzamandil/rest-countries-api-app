import React from 'react';
import { Link } from 'react-router-dom';

const CountriesItem = (props) => {

    return (
        <Link to={`/${props.country.name}`} className="country">
            <img src={props.country.flag} alt="flag" />
            <div className="country__content">
                <h3 className="title">{props.country.name}</h3>
                <p>Population: <span>{props.country.population}</span></p>
                <p>Region: <span>{props.country.region}</span></p>
                <p>Capital: <span>{props.country.capital}</span></p>
            </div>
        </Link>
    )
}

export default CountriesItem
