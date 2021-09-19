import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Country = (props) => {

    const [country, setCountry] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://restcountries.eu/rest/v2/name/${props.match.params.name}?fullText=true`);
            const data = await res.data;
            setCountry(data);
        }
        fetchData();
    }, [props.match.params.name])

    return (
        <section className="country__page">
            <div className="container">
                <Link to="" className="back"><i className="fas fa-arrow-left"></i>&nbsp;&nbsp;Back</Link>
                {country.length < 1 ? null : (
                    <div className="country__content">
                        <img src={country[0].flag} alt="flag" />
                        <div className="country__text">
                            <h2 className="name">{country[0].name}</h2>
                            <div className="infos">
                                <div className="col">
                                    <p>Native Name: <span>{country[0].nativeName}</span></p>
                                    <p>Population: <span>{country[0].population}</span></p>
                                    <p>Region: <span>{country[0].region}</span></p>
                                    <p>Sub Region: <span>{country[0].subregion}</span></p>
                                    <p>Capital: <span>{country[0].capital}</span></p>
                                </div>
                                <div className="col">
                                    <p>Top Level Domain: <span>{country[0].topLevelDomain}</span></p>
                                    <p>Currencies: <span>{country[0].currencies[0].code}</span></p>
                                    <p>Languages: {country[0].languages.map((lng, i) => (<span key={i}>{lng.name}, </span>))}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
        </section>
    )
}

export default Country
