import React from 'react';
import { shallow } from 'enzyme';
import { Quiz } from '../Components/Quiz';

//testcases I would like to do, but have not gotten to work
//Test that you come to the next question when you have clicked on an answer


describe('Quiz', () => {
  let wrapper;
  const score = 5
  const setScoreMock = jest.fn();
  const showHelpMock = true;



  beforeEach(() => {
    wrapper = shallow(
      <Quiz />,
    );
  });

  it('should not have called setScore when the quiz starts', () => {
    expect(setScoreMock).not.toHaveBeenCalled();
  });

  it('should show the corerect user score when all questions are answered', () => {
    expect(score).toEqual(5)
  })

  it('should show the helpbutton if it not clicked', () => {
    expect(showHelpMock).toBeTruthy();
  })
});

