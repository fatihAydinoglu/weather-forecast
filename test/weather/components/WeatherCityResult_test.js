import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';

import WeatherCityResult from '../../../src/modules/weather/components/WeatherCityResult';
import { Row, Column } from '../../../src/modules/core/';

const expect = chai.expect;

describe('Home Component', () => {
    it('should have correct child components', () => {
        const wrapper = shallow(
            <WeatherCityResult city="London" />
        );
        expect(wrapper.find(Row).length).to.equal(1);
        expect(wrapper.find(Column).length).to.equal(1);
        expect(wrapper.find('h3').text()).to.equal('London');
    });
});