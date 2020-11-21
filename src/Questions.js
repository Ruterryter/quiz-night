const questions =
  [
    {
      questionText: 'What is Merlot?',
      answerOptions: [
        { answerText: 'A grape varietal', isCorrect: true },
        { answerText: 'A snake', isCorrect: false },
        { answerText: 'A city in Ireland', isCorrect: false },
        { answerText: 'A dance step', isCorrect: false },
      ],
    },
    {
      questionText: 'Who Julia Child?',
      answerOptions: [
        { answerText: 'A ballet dancer', isCorrect: false },
        { answerText: 'An actress', isCorrect: false },
        { answerText: 'A cookbook writer', isCorrect: true },
        { answerText: 'An opera singer', isCorrect: false },
      ],
    },
    {
      questionText: 'Which country produce Cava?',
      answerOptions: [
        { answerText: 'France', isCorrect: false },
        { answerText: 'Italy', isCorrect: false },
        { answerText: 'Spain', isCorrect: true },
        { answerText: 'Chile', isCorrect: false },
      ]
    },
    {
      questionText: 'What is the most typical seasoning in Swedish Tacos?',
      answerOptions: [
        { answerText: 'Chili', isCorrect: false },
        { answerText: 'Garlic', isCorrect: false },
        { answerText: 'Cumin', isCorrect: true },
        { answerText: 'Ginger', isCorrect: false },
      ]
    },
    {
      questionText: 'What should not be in an original Princess cake?',
      answerOptions: [
        { answerText: 'Custard', isCorrect: false },
        { answerText: 'Marcipan', isCorrect: false },
        { answerText: 'Jam', isCorrect: true },
        { answerText: 'Sponge Cake', isCorrect: false },
      ]
    }

  ]

const shuffle = (array) => {
  // loop all elements
  for (let i = array.length - 1; i > 0; i--) {

    // pickup a random element
    const j = Math.floor(Math.random() * i)
    const temp = array[i]

    // swap it with the current element
    array[i] = array[j]
    array[j] = temp
  }
  return array
};

//Makes a new array of questions, shuffles it and returns only the 3 first questions
const shuffledArray = shuffle(questions)
const n = 3
const newQuestionsArray = shuffledArray.slice(0, n);


export const randomQuestions = newQuestionsArray

