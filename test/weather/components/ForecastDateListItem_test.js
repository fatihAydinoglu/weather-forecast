import React from 'react';
import chai from 'chai';
import {shallow} from 'enzyme';

const expect = chai.expect;

import ForecastDateListItem
  from '../../../src/modules/weather/components/ForecastDateListItem';

describe('ForecastDateListItem Component', () => {
  it('should have correct childs', () => {
    const wrapper = shallow(
      <ForecastDateListItem
        date="02/03/2017"
        selected={false}
        onDateSelect={() => true}
      />,
    );
    expect(wrapper.find('li').length).to.equal(1);
    expect(wrapper.find('a').length).to.equal(1);
    expect(wrapper.find('.btn').hasClass('active')).to.equal(false);
  });
  it('should have active class if selected', () => {
    const wrapper = shallow(
      <ForecastDateListItem
        date="02/03/2017"
        selected={true}
        onDateSelect={() => true}
      />,
    );
    expect(wrapper.find('li').length).to.equal(1);
    expect(wrapper.find('a').length).to.equal(1);
    expect(wrapper.find('.btn').hasClass('active')).to.equal(true);
  });
});
