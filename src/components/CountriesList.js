import React from 'react';
import CountriesItem from './CountriesItem';

const CountriesList = ({countries}) => {


    return (
        <section className="countries">
            {
                countries.map((country, index) => (<CountriesItem key={index} country={country}/>))
            }
        </section>
    )
}

export default CountriesList
