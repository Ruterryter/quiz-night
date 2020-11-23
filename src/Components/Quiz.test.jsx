import React from 'react';
import { shallow } from 'enzyme';
import { Quiz } from '../Components/Quiz';

//testcases 
//Test that the timer starts on 15 secs
//Test that the score is correct
//Test that the score is not visible until the end of the quiz


describe('Quiz', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = shallow(
      <Quiz />,
    );
  });

  it('should ')

  // it('the timer should start on 15 seconds ', () => {
  //   expect(wrapper.toBe(setSeconds)).toEqual(15)
  // });

  it('should find restart button ', () => {
    expect(wrapper.find('button').text())
      .toEqual('Restart');
  });

});
