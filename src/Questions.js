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
      questionText: 'Which organisation gives stars to restaurants?',
      answerOptions: [
        { answerText: 'FHM', isCorrect: false },
        { answerText: 'Michelin', isCorrect: true },
        { answerText: 'Goodyear', isCorrect: false },
        { answerText: 'LVMH', isCorrect: false },
      ],
    },
    {
      questionText: 'Aduki, borlotti and cannellini are types of what?',
      answerOptions: [
        { answerText: 'Rice', isCorrect: false },
        { answerText: 'Pasta', isCorrect: false },
        { answerText: 'Beans', isCorrect: true },
        { answerText: 'Biscottis', isCorrect: false },
      ],
    },
    {
      questionText: 'Deer meat is known by what name?',
      answerOptions: [
        { answerText: 'Venison', isCorrect: true },
        { answerText: 'Veal', isCorrect: false },
        { answerText: 'Vinder', isCorrect: false },
        { answerText: 'Harlom', isCorrect: false },
      ],
    },
    {
      questionText: 'Grenadine is obtained from which fruit?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: false },
        { answerText: 'Orange', isCorrect: false },
        { answerText: 'Pineapple', isCorrect: false },
        { answerText: 'Pomegranate', isCorrect: true },
      ],
    },
    {
      questionText: 'Who was Julia Child?',
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
      questionText: 'What is "Burrata"?',
      answerOptions: [
        { answerText: 'A pasta dish', isCorrect: false },
        { answerText: 'An Italian cheese', isCorrect: true },
        { answerText: 'A short bread from Piemonte', isCorrect: false },
        { answerText: 'A grape varieatal', isCorrect: false },
      ]
    },
    {
      questionText: 'Which ingredient is not included in aioli?',
      answerOptions: [
        { answerText: 'Garlic', isCorrect: false },
        { answerText: 'Egg yolk', isCorrect: false },
        { answerText: 'Oil', isCorrect: false },
        { answerText: 'Safron', isCorrect: true },
      ]
    },
    {
      questionText: 'Which country produce Tokaji?',
      answerOptions: [
        { answerText: 'France', isCorrect: false },
        { answerText: 'Germany', isCorrect: false },
        { answerText: 'Hungary', isCorrect: true },
        { answerText: 'Switzerland', isCorrect: false },
      ]
    },
    {
      questionText: 'How many years must a Rioja Reserva aged?',
      answerOptions: [
        { answerText: '3 years', isCorrect: true },
        { answerText: '5 years', isCorrect: false },
        { answerText: '7 years', isCorrect: false },
        { answerText: '1 year', isCorrect: false },
      ]
    },
    {
      questionText: 'Which flour is used in macarons?',
      answerOptions: [
        { answerText: 'Wheat flour', isCorrect: false },
        { answerText: 'Almond flour', isCorrect: true },
        { answerText: 'Corn flour', isCorrect: false },
        { answerText: 'Rye flour', isCorrect: false },
      ]
    },
    {
      questionText: 'Which months do you traditionally eat Semla in Sweden?',
      answerOptions: [
        { answerText: 'February-March', isCorrect: true },
        { answerText: 'March-April', isCorrect: false },
        { answerText: 'May-June', isCorrect: false },
        { answerText: 'December-January', isCorrect: false },
      ]
    },
    {
      questionText: 'What is the traditional spice in Kalops?',
      answerOptions: [
        { answerText: 'Rosé pepper', isCorrect: false },
        { answerText: 'Ginger', isCorrect: false },
        { answerText: 'Cloves', isCorrect: false },
        { answerText: 'Allspice', isCorrect: true },
      ]
    },
    {
      questionText: 'Which country is the origin of Nutella?',
      answerOptions: [
        { answerText: 'Norway', isCorrect: false },
        { answerText: 'France', isCorrect: false },
        { answerText: 'Germany', isCorrect: false },
        { answerText: 'Italy', isCorrect: true },
      ]
    },
    {
      questionText: 'In a traditional Swedish fika, which cake should you eat first?',
      answerOptions: [
        { answerText: 'Cinamon bun', isCorrect: true },
        { answerText: 'Cream cake', isCorrect: false },
        { answerText: 'Ginger bread', isCorrect: false },
        { answerText: 'Sponge cake', isCorrect: false },
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

//Shuffles the questions and makes a new array, from that array it takes only the 10 first questions and present to the user. 

const shuffledArray = shuffle(questions)
const n = 3
const newQuestionsArray = shuffledArray.slice(0, n);


export const randomQuestions = newQuestionsArray

