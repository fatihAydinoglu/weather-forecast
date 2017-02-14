import React, { Component } from 'react';

import { Row, Column } from '../../core';
import HourlyForecast from './HourlyForecast';

class ForecastList extends Component {
    render() {
        const { dailyForecastList } = this.props;
        if (!dailyForecastList) return null;
        return (
            <Row>
                <Column size="md" columnCount="8" offset="2">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Description</th>
                                <th>Temperature</th>
                                <th>Humidity</th>
                                <th>Pressure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dailyForecastList.map(forecast =>
                                <HourlyForecast key={forecast.time} forecast={forecast} />
                            )}
                        </tbody>
                    </table>
                    </div>
                </Column>
            </Row>
        );
    }
}

ForecastList.propTypes = {
    dailyForecastList: React.PropTypes.array
};

export default ForecastList;
