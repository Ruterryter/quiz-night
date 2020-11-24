import React from 'react';
import { shallow } from 'enzyme';
import { CountDowntimer } from 'Components/CountdownTimer'


describe('CountDownTimer', () => {
    it('it counts down from 15 to 0 and then stops', () => {
        const wrapper = shallow(<CountDowntimer />);
        expect(wrapper).to();
    });
});
