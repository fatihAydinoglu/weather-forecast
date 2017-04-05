import React, {Component} from 'react';
import {Row, Column} from '../../core';

// Input for city name
class WeatherInput extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {city: ''};

    // bindings
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const {city} = this.state;
    if (city) {
      this.props.onSubmit(city);
      this.setState({city: ''});
    }
  }

  handleInputChange(e) {
    this.setState({city: e.target.value});
  }

  render() {
    return (
      <Row>
        <Column size="md" columnCount="8" offset="2">
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label>City</label>
              <input
                className="form-control input-lg"
                type="text"
                placeholder="Enter a city name"
                value={this.state.city}
                onChange={this.handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </Column>
      </Row>
    );
  }
}

WeatherInput.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

export default WeatherInput;
