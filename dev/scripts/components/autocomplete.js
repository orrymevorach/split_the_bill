import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';

const Autocomplete = (props) => {
    return (

    <PlacesAutocomplete
        value={props.address}
        onChange={props.change}
        onSelect={props.select}
    >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
            <div>
                <form action="#" onSubmit={(e) => props.onSubmitRestaurant(e)}>
                    <label htmlFor="restaurantInput" id="restaurant-label">What Restaurant Are You Eating At?</label>
                    <input
                        type="text"
                        name="restaurantInput"
                        value={props.address}
                        {...getInputProps({
                            className: 'location-search-input'
                        })}
                    />
                    <input type="submit" value="Submit"/>
                
                </form>
                <div className="autocomplete-dropdown-container">
                    {suggestions.map(suggestion => {
                        const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                            ? { backgroundColor: 'darkcyan', cursor: 'pointer', color: 'white' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                            <div {...getSuggestionItemProps(suggestion, { className, style })}>
                                <span>{suggestion.description}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )}
    </PlacesAutocomplete>
    )
}

export default Autocomplete ;