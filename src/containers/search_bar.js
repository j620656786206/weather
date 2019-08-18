/* eslint-disable object-curly-spacing */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherAction } from '../actions/weather-actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      country: 'US'
    };
  }

  onInputChange = (key, event) => {
    this.setState({ [key]: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.fetchWeatherAction(this.state.city, this.state.country);
    this.setState({
      city: '',
      country: 'US'
    });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.city}
          onChange={this.onInputChange.bind(this, 'city')}
        />
        <select
          onChange={this.onInputChange.bind(this, 'country')}
          value={this.state.country}
        >
          <option value="US">US</option>
          <option value="TW">TW</option>
        </select>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeatherAction }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
