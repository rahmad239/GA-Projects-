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
// ]       

var qDisplayField = document.querySelector('.question-display')
var radioOne = document.querySelector('.radios')

//define buttons//
var gaga1button = document.querySelector('.cat1 .Q100')
gaga1button.addEventListener('click',showQuestion1)
function showQuestion1 (evt) {
  console.log('test Q1') 
  qDisplayField.innerHTML=board[0].questionsData[0].question
  radioOne.innerHTML = board[0].questionsData[0].answers[0]
}


// for (var i = 0; i < board.length; i+=3) {
//   let gagaQuestion = questions[i]
//   let displayQuestion = gagaQuestion

// var gaga2button = document.querySelector('.cat1 .Q200')
// gaga2button.addEventListener('click',showQuestion2)
// function showQuestion2 (evt) {
//   console.log('test Q2') 
// }
// var gaga3button = document.querySelector('.cat1 .Q300')
// gaga3button.addEventListener('click',showQuestion3)
// function showQuestion3 (evt) {
//   console.log('test Q3')
// }

// var gaga4button = document.querySelector('.cat1 .Q400')
// gaga4button.addEventListener('click', showQuestion4)
// function showQuestion4 (evt) {
//   console.log('test Q4') 

// }
//figure out how to get the test question in
// var questionField = document.querySelector('.question')
// questionField.addEventListener()
// ga100.Question

// console.log(questionField)


// keeping score: parsFloat(document.querySelector(
  // can parsefloat be used?


// var starWars100 = document.querySelector('#cat2.100')
//     Question: What are the names of the twins on star wars?
//     Answer: 'Luke & Leia'
//     opt1: 'Hans & Leia'
//     opt2: 'Luke & Leslie'
//     opt3: 'Christian & Anastasia'

// var starWars200 = document.querySelector('#cat2.200')
//     Question: Hans solo had one main fighting companion. What was their name?
//     Answer:
//     opt1: 'Hans & Leia'
//     opt2: 'Luke & Leslie'
//     opt3: 'Christian & Anastasia'


// var ga100 = {
//   Question: 'How many jars of crunchy peanut butter containers are put out daily?'
//   Answer: '2'
//   opt1: '3'
//   opt2:'2'
//   opt3:'1'
//   cat: 'gagaForGa'
//   loc: '#cat1 .100'

// var ga200 = function () {
//   Question: 'What caused the fire alarm to sound last time it went off?'
//   Answer: 'Burning Popcorn'
//   opt1: 'Burning Bread'
//   opt2: 'Burning Plastic'
//   opt3: 'Burning Popcorn'
//   cat: 'gagaForGa'
//   tile: '#cat1 .200'
// }

// var ga300 = function () {
//   Question: 'What animal does the robot near the bathroom claim to be?'
//   Answer: 'Unicorn'
//   opt1: 'Unicorn'
//   opt2: 'Bunny Rabbit'
//   opt3: 'Puppy'
//   cat: 'gagaForGa'
//   tile: '#cat1 .300'

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
