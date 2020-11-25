import React from 'react';
import { shallow } from 'enzyme';
import { Quiz } from '../Components/Quiz';

//testcases 
//Test that the score is correct
//Test that you come to the next question when you have clicked on an answer
//Test that the score is not visible until the end of the quiz
//Test that you can restart the quiz in the end


describe('Quiz', () => {
  let wrapper;
  const score = 0
  const setScoreMock = jest.fn();


  beforeEach(() => {
    wrapper = shallow(
      <Quiz />,
    );
  });

  it('should not have called setScore', () => {
    expect(setScoreMock).not.toHaveBeenCalled();
  });


});
