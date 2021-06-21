import React from 'react';


const SearchForm = (props) => {
    //State to hold the search query
    const [searchQuery, setSearchQuery] = React.useState({searchterm: "",})
    //Updates searchQuery when we type into the form
    const handleChange = (event) => {
        setSearchQuery({...searchQuery, [event.target.name]: event.target.value})
        console.log(setSearchQuery)
    }
    const handleSubmit = (event) => {
        //use the event object to detect key and value to update
        event.preventDefault();
        //use the search query to pass query to songSearch prop, in new page output
        props.songSearch(searchQuery.searchterm)
    }


    return (

        <div>
            <form className = "field" onSubmit={handleSubmit}>
                <input className = "input"
                    type = "text"
                    name = "searchterm"
                    onChange={handleChange}
                    value = {searchQuery.searchterm}
                    />
                <input className = "button is-info" type = "submit" value = "submit" />
            </form>
        </div>
    )
}

export default SearchForm;