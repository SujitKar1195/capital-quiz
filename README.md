

<h1>Capital Quiz</h1>

<p><strong>Live Demo:</strong> <a href="https://capital-quiz.vercel.app/" target="_blank">https://capital-quiz.vercel.app/</a></p>

<h2>Project Overview</h2>
<p>The <strong>Capital Quiz</strong> is a web-based application where users can test their knowledge of world capitals. The quiz presents a series of countries, and the user must enter the correct capital for each one. The app tracks the user’s score, displays the current question number, and provides a summary of results at the end, showing the correct answers and whether the user’s answers were correct or incorrect.</p>

<h2>Technologies Used</h2>
<ul>
    <li><strong>Node.js</strong> and <strong>Express.js</strong> - Backend framework to build the server and handle routing.</li>
    <li><strong>EJS</strong> - Templating engine used to dynamically generate HTML pages.</li>
    <li><strong>PostgreSQL</strong> - Database for storing and retrieving quiz data.</li>
    <li><strong>Aiven.io</strong> - Managed PostgreSQL service for database hosting.</li>
    <li><strong>pg</strong> - PostgreSQL client for Node.js to interact with the database.</li>
    <li><strong>Bootstrap 5</strong> - Frontend framework for styling and responsive design.</li>
    <li><strong>Vercel</strong> - Deployment platform for hosting the live application.</li>
</ul>

<h2>Features</h2>
<ul>
    <li>Displays 5 randomly selected countries for the quiz.</li>
    <li>Real-time score tracking as the user answers each question.</li>
    <li>Final result summary with a breakdown of correct and incorrect answers.</li>
    <li>Responsive design with Bootstrap 5 for a seamless experience on all devices.</li>
</ul>
<h2>Screenshots</h2>
<p>Here are some screenshots of the project:</p>
<div>
    <img src="./screenshots/home.png" alt="Screenshot 1" style="width: 100%; max-width: 800px; height: auto;">
    <img src="./screenshots/result.png" alt="Screenshot 2" style="width: 100%; max-width: 800px; height: auto;">
</div>

<h2>Setup Instructions</h2>
<p>If you want to run this project locally, follow these steps:</p>
<ol>
    <li>Clone the repository:</li>
    <pre><code>git clone https://github.com/yourusername/capital-quiz.git</code></pre>
    <li>Install the dependencies:</li>
    <pre><code>npm install</code></pre>
    <li>Create a `.env` file in the root directory and add your PostgreSQL credentials:</li>
    <pre><code>DB_USER=yourUsername
DB_HOST=yourHost
DB_DATABASE=yourDatabase
DB_PASSWORD=yourPassword
DB_PORT=5432</code></pre>
    <li>Start the application:</li>
    <pre><code>npm start</code></pre>
    <li>Open your browser and visit <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> to see the app in action.</li>
</ol>

<h2>License</h2>
<p>This project is licensed under the MIT License. You are free to use, modify, and distribute this software.</p>

<p>Check out the live demo by clicking the button below:</p>
<a href="https://capital-quiz.vercel.app/" target="_blank" class="button">Live Demo</a>

