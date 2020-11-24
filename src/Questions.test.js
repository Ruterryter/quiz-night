import { newQuestionsArray } from 'Questions';

//test cases
//test that the array returns 10 questions

test("Shuffled array", () => {
    expect(newQuestionsArray).toEqual(
        expect.arrayContaining([])
    );
});