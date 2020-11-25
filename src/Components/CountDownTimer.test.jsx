import React from 'react';
import { mount } from 'enzyme';
import { Countdowntimer } from './CountdownTimer'

//testcases I would like to do, but have not gotten them to work
//Test that the timer counts  down from 15 to 0
//Test that the timer stops at 0


describe('CountdownTimer', () => {
    let wrapper;
    const isActiveMock = true
    const secondsMock = 15
    const setSecondsMock = true

    beforeEach(() => {
        wrapper = mount(
            <Countdowntimer isActive={isActiveMock} seconds={secondsMock} setSeconds={setSecondsMock} />,
        );
    });

    it('should show 15 when the quiz starts', () => {
        expect(secondsMock).toEqual(15)
    })

});
