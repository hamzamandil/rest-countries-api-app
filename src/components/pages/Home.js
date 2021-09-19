import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from '../Form';
import CountriesList from '../CountriesList';

const Home = () => {

    
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");

    useEffect(() => {
        if(search.length > 0) {
            const getData = async () => {
                const res = await axios.get(`https://restcountries.eu/rest/v2/name/${search}`);
                setCountries(res.data);
            }
            getData();
        } else if (region.length > 1) {
            const getData = async () => {
                const res = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`);
                setCountries(res.data);
            }
            getData();
        }else {
            const getData = async () => {
                const res = await axios.get("https://restcountries.eu/rest/v2/all");
                setCountries(res.data);
            }
            getData();
        }
    }, [search, region]);

    console.log(region)

    const searchHandler = (query) => {
        setSearch(query)
    }
    const regionHandler = (region) => {
        setRegion(region)
    }

    return (
        <section className="home">
            <div className="container">
                <Form searchHandler={searchHandler} regionHandler={regionHandler}/>
                <CountriesList countries={countries}/>
            </div>
        </section>
    )
}

export default Home
