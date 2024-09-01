const express = require('express');
const path = require('path');
require('dotenv').config();
const url = require('url');
const pg = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.static(path.resolve('./')));
app.use(express.urlencoded({extended: true}));

let score = 0;
let currentCountry = {};
let allData = [];
let questionNumber = 1;
const totalQuestions = 5;
let questionsAndAnswers = [];

const config = {
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  port: 22140,
  database: 'defaultdb',
  ssl: {
    rejectUnauthorized: false,
  },
};

const db = new pg.Client(config);

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log('db is connected');

  db.query('SELECT * FROM capitals', (err, res) => {
    if (err) {
      console.log('Error in executing query.');
    } else {
      allData = res.rows;
      generateRandomCountry();
    }
  });
});

// Function to generate a random country from the database
function generateRandomCountry() {
  const randomIndex = Math.floor(Math.random() * allData.length);
  currentCountry = allData[randomIndex];
}

// Render the index page
app.get('/', function (req, res) {
  if (questionNumber > totalQuestions) {
    res.render('pages/result', {
      score: score,
      questionsAndAnswers: questionsAndAnswers,
    });
  } else {
    res.render('pages/index', {
      score: score,
      country: currentCountry.country,
      questionNumber: questionNumber,
      totalQuestions: totalQuestions,
    });
  }
});

// Handle form submission
app.post('/', (req, res) => {
  const userCapital = req.body.capital.trim().toLowerCase();
  const correctCapital = currentCountry.capital.toLowerCase();

  // Store the question and correct answer
  questionsAndAnswers.push({
    country: currentCountry.country,
    userAnswer: req.body.capital,
    correctAnswer: currentCountry.capital,
  });

  if (userCapital === correctCapital) {
    score += 10;
  } else {
    score -= 5;
  }

  questionNumber++;

  if (questionNumber <= totalQuestions) {
    generateRandomCountry();
  }

  res.redirect('/');
});

// Reset the quiz
app.post('/reset', (req, res) => {
  score = 0;
  questionNumber = 1;
  questionsAndAnswers = [];
  generateRandomCountry();
  res.redirect('/');
});

// Start the server
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on port: ${PORT}`);
});
