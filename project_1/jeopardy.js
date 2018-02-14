// think about how you want to structure your data
questions: [
  {
    title: "GAGA for GA",
    questions: [
      {
        question: 'What caused the fire alarm to sound last time it went off?',
        answers: [
          'Burning Bread',
          'Burning Plastic',
          'Burning Popcorn',
        ]
    ], 
        correctAnswer: 'Burning Popcorn', /* is this bracket in the right place*/
      },
      {
        question: 'How many jars of crunchy peanut butter containers are put out daily?',
        answers: [
          '3',
          '2',
          '1',
        ]
        ],
        correctAnswer: '2',
      },
      {
        question: 'What animal does the robot near the bathroom claim to be?',
        answers: [
          'Unicorn',
          'Bunny Rabbit',
          'Puppy',
        ]
        ],
        correctAnswer: 'Unicorn',
      },
      {
        question: 'Question: What time does the office close for students?', 
        answers: [
          '11',
          '10:30',
          '10',
      ]
      ],
        correctAnswer: '10',
    },
  
  {
    title: "Star Wars",
    questions: [
        {
        question: 'What are the names of the twins on star wars?',
        answers: [
          'Hans & Leia',
          'Luke & Leslie',
          'Christian & Anastasia',
          ]
        ],  
           correctAnswer: 'Luke & Leia',
        },
        {
        question: Hans solo had one main fighting companion. What was their name?,
         answers: [
          'R2D2',
          'Chubaka',
          'Princess Leia',
         ]
        ],
          correctAnswer: 'Chubaka',
        },
        {



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
}
//define buttons//
var gaga1button = document.querySelector('.cat1 .Q100')
//qselector wont work any other way....ask about this!! 
//also can this be a variable to assign the selector? do  I need to set one up for each variable?
gaga1button.addEventListener('click',showQuestion1)
function showQuestion1 (evt) {
  console.log('test Q1') 
//figure out how to get the test question in
}

var gaga2button = document.querySelector('.cat1 .Q200')
gaga2button.addEventListener('click',showQuestion2)
function showQuestion2 (evt) {
  console.log('test Q2') 
}
var gaga3button = document.querySelector('.cat1 .Q300')
gaga3button.addEventListener('click',showQuestion3)
function showQuestion3 (evt) {
  console.log('test Q3')
}

var gaga4button = document.querySelector('.cat1 .Q400')
gaga4button.addEventListener('click', showQuestion4)
function showQuestion4 (evt) {
  console.log('test Q4') 

}

var questionField = document.querySelector('.question')
questionField.addEventListener()
ga100.Question

console.log(questionField)

// function displayQ100 (){
//     return (ga100[0])
// }
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
}

// let instructors = ["meg", "zakk", "perry", "james", "ali", "max", "mike"]
// let currentInstructor = prompt('Who is currently teaching?')

// for (let i = 0; i < instructors.length; i++) {
//   if (instructors[i] === currentInstructor) {
//     console.log(instructors[i] + ' is currently teaching!')
//   } else {
//     console.log(instructors[i])
//   }
// }
