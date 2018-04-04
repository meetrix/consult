import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';

let people = [];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestionValue(suggestion) {
  return `${suggestion.first} ${suggestion.last}`;
}
function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp(`\\b${escapedValue}`, 'i');

  return people.filter(person => regex.test(getSuggestionValue(person)));
}

function renderSuggestion(suggestion, { query }) {
  const suggestionText = `${suggestion.first} ${suggestion.last}`;
  const matches = AutosuggestHighlightMatch(suggestionText, query);
  const parts = AutosuggestHighlightParse(suggestionText, matches);

  return (
    <span className={`suggestion-content ${suggestion.twitter}`}>
      <span className="name">
        {
          parts.map((part, index) => {
          const className = part.highlight ? 'highlight' : null;

         return (
           /* eslint react/no-array-index-key:0 */
           <span className={className} key={index}>{part.text}</span>
         );
       })
     }
      </span>
    </span>
  );
}

class ConsulteeSuggest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people:
        this.props.relatedUsers,
      value: '',
      suggestions: [],
    };

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    /* eslint prefer-destructuring:0 */
    people = this.state.people;
  }


  onChange(event, { newValue }) {
    this.setState({
      value: newValue,
    });
    this.props.onConsulteeChange(newValue);
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value),
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: [],
    });
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type 'Consultee Name'",
      value,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}
ConsulteeSuggest.propTypes = {
  relatedUsers: PropTypes.arrayOf.isRequired,
  onConsulteeChange: PropTypes.func.isRequired,
};
export default ConsulteeSuggest;

