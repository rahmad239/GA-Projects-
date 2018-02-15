// // think about how you want to structure your data
var board = [
  {
    title: "GAGA for GA",
    questionsData: [
      {question: 'What caused the fire alarm to sound last time it went off?',
        answers: [
          'Burning Bread',
          'Burning Plastic',
          'Burning Popcorn'
        ],
        correctAnswer: 'Burning Popcorn' /* is this bracket in the right place*/
      },
      {question: 'How many jars of crunchy peanut butter containers are put out daily?',
        answers: [
          '3',
          '2',
          '1'
        ],
        correctAnswer: '2'

      },
      {question: 'What animal does the robot near the bathroom claim to be?',
        answers: [
          'Unicorn',
          'Bunny Rabbit',
          'Puppy'
        ],
        correctAnswer: 'Unicorn'
      },
      {question: 'Question: What time does the office close for students?', 
        answers: [
          '11',
          '10:30',
          '10'
        ],
        correctAnswer: '10'
      }
    ]
  },
]
 

    // {
    // title: "Star Wars",
    // questionsData: [
    //   {question: 'What are the names of the twins on star wars?',
    //     answers: [
    //       'Hans & Leia',
    //       'Luke & Leslie',
    //       'Christian & Anastasia'
    //     ],
    //     correctAnswer: 'Luke & Leia'
    //   },
    //   {question: 'Hans solo had one main fighting companion. What was their name?',
    //     answers: [
    //       'R2D2',
    //       'Chubaka',
    //       'Princess Leia'
    //     ],
    //     correctAnswer: 'chewbacca'
    //   },
    //   {question: 'What planet is lukes mother from?',
    //     answers: [
    //       'Naboo', 
    //       'Earth 2',
    //       'Vonkru'
    //     ],
    //     correctAnswer: 'Naboo'
    //   },
    //   {question: 'What species resides on the forest moon of Endor?',
    //     answers: [
    //       'Ewok',
    //       'Hutt',
    //       'Droid'
    //     ],
    //     correctAnswer: 'Ewoke'
    //   } 
    // ]  
    
    
      // title: "Classmates? Who day?",
//         {
//           question: 'How many students are in WDI 21?',
//           answers:  [
//             '21',
//             '19',
//             '18',
//             ]
//           ],  
//             correctAnswer: '19'
//           },
//           {
//           question: 'Who traveles the farthest to attend the program?',
//           answers:  [
//             'Qya',
//             'Kevin',
//             'Timmy'
//             ]
//          correctAnswer: 'Qya',  
//         },
//         {
//         question: 'How many students wear glasses to class?',
//         answers:  [
//           '11',
//           '14',
//           '7'
//           ]
//         ], 
//         correctAnswer: '7',
//         },
//         { 
//          question:'How many students live with their parents for the class?',
//          answers: [
//            '7',
//            '9',
//            '13'
//             ]
//           ],
//           correctAnswer: '11'
//         },
//         {
//           question: 'How many students previously attended classes in programing prior to the cohort?',
//           answers: [
//             '4',
//             '3',
//             '8'
//           ]
//           correctAnswer: '8'
//         },
//       ],  
//     {
//     title: "Sup teach?"
//           question: 'Combined how many years of teaching exp do our teachers have?',
//           answers: [
//             '2',
//             '6',
//             '8'
//           ]
//         ],
//           correctAnswer: '8'
//         },
//         { 
//         question: 'Where is meg from?', 
//         answers: [
//           'IL',
//           'CA',
//           'DC'
//           ]
//         ],  
//           correctAnswer: 'DC'
//       },  
//       { 
//         question: 'What state does perry rep on his sweatshirt?',
//         answers: [
//           'Maryland',
//           'Pennsylvania',
//           'Arizona'
//           ]
//         ],
//           correctAnswer: 'Arizona'
//       },
//       {          
//         question: 'Which WDI cohorts were meg, perry and zakk in?',
//         answers: [
//           '16, 18, 3'
//           '19, 12, 8'
//           '17, 15, 7'
//           ]
//         ],
//           correctAnswer: '19, 12, 8'
//       },     
//       {
//         question: 'What does Zakks tattoo say?',
//         answers: [
//           'mind yours!'
//           'js 4 lyfe'
//           '???'
//           ]
//         ],
//           correctAnswer: '???'
//       },
//       {
//     title: Metro Blues
          
//           question:'What are the two closest metro stops to GA?', 
//           answers: [
//             'Metro Center and Fargut North'
//             'China Town and Metro Center'
//             'Farragut North and McPherson Square'
//           ]
//         ],
//           correctAnswer: 'Farragut North and McPherson Square'
//       },
//       { 
//         question: 'What are the two ends of the redline train?'
//         answers: [
//           'Navy Yard and Tysons',
//           'Branch Ave and Silver Spring',
//           'Shady Grove and Silver Spring'
//         ]
//       ],
//           correctAnswer: Silver Spring and Shady Grove
//     },
//     {  
//         question: 'What are is the three letter abbreviation for the airport that has a stop off of the metro line?',
//         answers: [
//           'IAD'
//           'BWI'
//           'DCA'
    
//         ]
//       ],
//           correctAnswer: "DCA"
//     },
//     {
//       question: 'How many escalators escalators  are there on the L street exit of Fargot North',
//       answers: [
//         '1'
//         '3'
//         '2'
//         ]
//       ],
//         correctAnswer: '3'
//     },
//     {
//       question: 'What is the pharmacy located on the corner of L and 19th at the metro exit?',
//       answers: [
//         'Walgreens'
//         'CVS'
//         'Peoples'
//         ]
//       ],
//           correctAnswer: 'CVS'
          
//       },
//     }
//   ]         
// // ]       

//GA question 1
var gaga1button = document.querySelector('.cat1 .q100')
gaga1button.addEventListener('click',showQuestion1)
function showQuestion1 (evt) {
  console.log('test Q1') 
var qDisplayField = document.querySelector('.question-display')
var radioOne = document.getElementById("opt1")
var AnswerChoice1= board[0].questionsData[0].answers[0]
console.log(AnswerChoice1)

var radioTwo = document.getElementById("opt2")
var AnswerChoice2= board[0].questionsData[0].answers[1]
console.log(AnswerChoice2)

var radioThree = document.getElementById("opt3")
var AnswerChoice3= board [0].questionsData[0].answers[2]
console.log(AnswerChoice3)

  qDisplayField.innerHTML=board[0].questionsData[0].question
  radioOne.innerHTML=AnswerChoice1
  radioTwo.innerHTML=AnswerChoice2
  radioThree.innerHTML=AnswerChoice3
}

//GA question 2
var gaga2button = document.querySelector('.cat1 .q200')
gaga2button.addEventListener('click',showQuestion2)
function showQuestion2 (evt) {
  console.log('test Q2') 

var qDisplayField = document.querySelector('.question-display')
var radioOne = document.getElementById("opt1")
var AnswerChoice1= board[0].questionsData[1].answers[0]
console.log(AnswerChoice1)

var radioTwo = document.getElementById("opt2")
var AnswerChoice2= board[0].questionsData[1].answers[1]
console.log(AnswerChoice2)

var radioThree = document.getElementById("opt3")
var AnswerChoice3= board [0].questionsData[1].answers[2]
console.log(AnswerChoice3)

  qDisplayField.innerHTML=board[0].questionsData[1].question
  radioOne.innerHTML=AnswerChoice1
  radioTwo.innerHTML=AnswerChoice2
  radioThree.innerHTML=AnswerChoice3
}

//GA question 3
var gaga3button = document.querySelector('.cat1 .q300')
gaga3button.addEventListener('click',showQuestion3)
function showQuestion3 (evt) {
  console.log('test Q3')

var qDisplayField = document.querySelector('.question-display')
var radioOne = document.getElementById("opt1")
var AnswerChoice1= board[0].questionsData[2].answers[0]
console.log(AnswerChoice1)

var radioTwo = document.getElementById("opt2")
var AnswerChoice2= board[0].questionsData[2].answers[1]
console.log(AnswerChoice2)
  
var radioThree = document.getElementById("opt3")
var AnswerChoice3= board [0].questionsData[2].answers[2]
console.log(AnswerChoice3)
  
  qDisplayField.innerHTML=board[0].questionsData[2].question
  radioOne.innerHTML=AnswerChoice1
  radioTwo.innerHTML=AnswerChoice2
  radioThree.innerHTML=AnswerChoice3
}

//GA question 4
var gaga4button = document.querySelector('.cat1 .q400')
gaga4button.addEventListener('click', showQuestion4)
function showQuestion4 (evt) {
  console.log('test Q4') 
var qDisplayField = document.querySelector('.question-display')
var radioOne = document.getElementById("opt1")
var AnswerChoice1= board[0].questionsData[3].answers[0]
console.log(AnswerChoice1)

var radioTwo = document.getElementById("opt2")
var AnswerChoice2= board[0].questionsData[3].answers[1]
console.log(AnswerChoice2)
  
var radioThree = document.getElementById("opt3")
var AnswerChoice3= board [0].questionsData[3].answers[2]
console.log(AnswerChoice3)
  
  qDisplayField.innerHTML=board[0].questionsData[3].question
  radioOne.innerHTML=AnswerChoice1
  radioTwo.innerHTML=AnswerChoice2
  radioThree.innerHTML=AnswerChoice3
}

// keeping score: parsFloat(document.querySelector(
  // can parsefloat be used?

// let instructors = ["meg", "zakk", "perry", "james", "ali", "max", "mike"]
// let currentInstructor = prompt('Who is currently teaching?')

// for (let i = 0; i < instructors.length; i++) {
//   if (instructors[i] === currentInstructor) {
//     console.log(instructors[i] + ' is currently teaching!')
//   } else {
//     console.log(instructors[i])
//   }
// if ($('.required input:checked').length > 0) {

// }
