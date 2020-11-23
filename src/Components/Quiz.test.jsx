import React from 'react';
import { shallow } from 'enzyme';
import { Quiz } from '../Components/Quiz';

describe('Quiz', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Quiz isActive={isActive} seconds={seconds} setIsActive={setIsActive} setSeconds={setSeconds} />,
    );
  });

  it('should ', () => {
    expect(wrapper.find();
  });


});
