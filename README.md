# Weather_App

🌦️ Modern Weather App 2025

A sleek, responsive, and secure weather application built with Vanilla JavaScript, HTML5, and CSS3. This project demonstrates real-time data fetching using the OpenWeatherMap API and modern front-end development practices.

🚀 Features

Real-Time Data: Fetches live temperature, humidity, and wind speed for any city worldwide.
Smart Search: Integrated <form> handling allows searching via the "Enter" key or search button.
Security First: Implements a config.js and .gitignore strategy to keep private API keys out of public repositories.

Modern UI: Responsive design with SVG icons and a "Chrome-style" clean aesthetic.
Error Handling: Instant user feedback if a city is not found or if the network fails.

🛠️ Tech Stack
HTML5: Semantic structure for better accessibility (A11y).
CSS3: Flexbox layout and absolute positioning for a polished UI.
JavaScript (ES6+): Uses Async/Await, Fetch API, and DOM manipulation.
API: OpenWeatherMap API for weather data.

📁 Project Structure
text
weather-app/
│
├── index.html        # Main structure
├── style.css         # Styling and layout
├── app.js            # Main logic & API handling
├── config.js         # API Key (Hidden from GitHub)
├── .gitignore        # Tells Git to ignore config.js
└── images/           # SVGs and icons
Use code with caution.

⚙️ Setup & Installation

1. Get your API Key
Sign up for a free account at OpenWeatherMap.
Navigate to the "API Keys" tab and generate your unique key.
2. Configure Local Files
Create a file named config.js in the root folder and add your key:
javascript
// config.js
const API_KEY = "YOUR_SECRET_KEY_HERE";
Use code with caution.

3. Hide Your Key (Crucial for 2025)
Create a .gitignore file and add the following line to ensure your secret key is never uploaded to GitHub:
text
config.js
Use code with caution.

4. Run the App
Simply open index.html in your browser (use the "Live Server" extension in VS Code for the best experience).

🧩 Code Flow
Event Listening: The app listens for a submit event on the search form.
Validation: It trims the input and checks if a city name was entered.
Data Fetching: It sends a request to the OpenWeatherMap endpoint using the fetch API.
Parsing: The raw response is converted to a JSON object.
UI Update: The updateUI() function dynamically injects the temperature, city name, wind, and humidity into the DOM.

🛡️ Best Practices Implemented
Semantic HTML: Used <header>, <main>, and <footer> tags.
Error Boundaries: Uses try...catch blocks to handle API failures gracefully.
Responsive Design: Uses max-width and viewport meta tags for mobile compatibility.

📝 License
This project is open-source and available under the MIT License.


