import React from 'react';

const SearchBar = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>
                    <input autoFocus
                    type= 'text'
                    name='name'
                    placeholder='Search events'
                    value={props.value}
                    onChange={props.handleChange}
                    />
                </label>
            </form>
        </div>
    )
}

export default SearchBar;