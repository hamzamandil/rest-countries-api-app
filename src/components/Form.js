import React, {useState} from 'react'

const Form = (props) => {
    
    
    const [query, setQuery] = useState("");

    const searchQueryHandler = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        props.searchHandler(query);
    }

    const regionFilter = (e) => {
        props.regionHandler(e.target.value);
    }


    
    return (

        <div className="form row">
                <form>
                    <div className="input">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Search for a country..." onChange={searchQueryHandler} value={query}/>
                    </div>
                </form>
                    <div className="select">
                        <select onChange={regionFilter}>
                            <option defaultValue value="">Filter by region</option>
                            <option value="africa">Africa</option>
                            <option value="americas">America</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="oceania">Oceania</option>
                        </select>
                    </div>
        </div>
    )
}

export default Form
