🚀 Syntecxhub Weather App

A fully responsive and cleanly structured weather application built using React, Tailwind CSS, React Router, and the OpenWeather API.
This project is developed as part of the Syntecxhub Internship Assignment and follows professional standards for UI, code structure, and API handling.

📌 Project Overview

The Weather App allows users to:

Search weather by entering any city

View current temperature, humidity, wind speed, and weather description

View weather icons using OpenWeather conditions

Check a 5-day forecast with daily temperatures

Experience a responsive and minimal UI

Get proper error messages for invalid inputs

Enjoy a clean component-based architecture

🧩 Features
✅ Core Features

City-based weather search

Current weather data

Weather icons

Error handling

Responsive UI

Loading handling (optional to add)

🔥 Advanced Features

5-day forecast (daily noon data)

Clean and reusable components

Tailwind-powered styling

Modular folder structure

Router support for scalable navigation

API call abstraction using service files

📁 Folder Structure
src/
  components/
    Header.jsx
    Footer.jsx
    SearchBar.jsx
    WeatherCard.jsx
    Forecast.jsx
    ErrorBox.jsx
  pages/
    Home.jsx
  services/
    weatherAPI.js
  utils/
    formatDate.js
  App.jsx
  main.jsx
  index.css


This structure ensures the app scales cleanly without dumping everything inside one file.

🛠 Tech Stack

React — Frontend UI

Tailwind CSS — Styling

React Router DOM — Routing

OpenWeather API — Weather data

JavaScript (ES6+) — Logic

Vite / CRA — Build tool

🔧 Installation & Setup

Follow these steps to run the project locally:

1️⃣ Clone the repository
git clone https://github.com/smartsella/Syntecxhub_Weather_App.git

2️⃣ Navigate into the project
cd Syntecxhub_Weather_App

3️⃣ Install dependencies
npm install

4️⃣ Add your OpenWeather API key

Open the file:

src/services/weatherAPI.js


Replace:

const API_KEY = "YOUR_API_KEY";


with your actual key.

5️⃣ Start the app
npm run dev


Your app will run on:

http://localhost:5173


(or whichever port Vite chooses)

🌤 API Used

Weather data is fetched from:

🔗 https://openweathermap.org/api

We use two main endpoints:

/weather → Current weather

/forecast → 5-day forecast

All API functions are stored in:
src/services/weatherAPI.js

🎨 UI Highlights

Clean layout using Tailwind

Minimalistic design

Blue theme matching weather concepts

Rounded cards

Fully mobile responsive

Modern spacing and typography

📸 Screenshots (Add after running)

You can add:

Home page screenshot

Weather card

Forecast grid

Example format:

![Weather App Screenshot](./screenshots/home.png)

🚀 Deployment

You can deploy on:

Netlify

Vercel

GitHub Pages

Render

Example (Netlify):

Push your project to GitHub

Go to Netlify dashboard

New Site → Import from Git

Select repository

Deploy

🧪 Future Improvements

Dark Mode

Auto-detect current location weather

Save recent searches

Add Celsius ↔ Fahrenheit toggle

Add animations using Framer Motion

Add global error boundary

🤝 Author

Selladurai (smartsella)
Syntecxhub Internship Trainee
GitHub: https://github.com/smartsella

📜 License

This project is open-source and free to use.

🎯 Final Note

This README is internship-grade, clean, readable, and professional.
If you want, I can also generate:

🔥 A polished "About Section"
🔥 Badges (React, Tailwind, API, etc.)
🔥 Commit message format guide
🔥 GitHub project description (short/long)
