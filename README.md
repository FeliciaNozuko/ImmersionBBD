## Immersion Day App
## This App was deployed to Vercel
https://immersion-bbd-jh66.vercel.app/

## Overview
The Immersion Day App is a web application designed for learners to apply for immersion days. Built using JavaScript, HTML5, and CSS, this app allows users to submit their cohort, email and Province. The application is responsive and does not use media queries to achieve its layout. It also uses PostgreSQL as its database.

## Features
User Application Form: Submit cohort and institution email.
Responsive Design: No media queries used.
Landing Page: Navigate to the application form via an "Apply" button.
PostgreSQL Database: Stores application data.

## Technologies Used
JavaScript: Main scripting language.
HTML5: Structure and content of the app.
CSS: Styling and layout.
PostgreSQL: Database for storing application data.

## Getting Started

## Install Dependencies

`npm install`
`npm start`

## Setup Environment Variables
Create a .env file in the root directory with the following contents:

.env
DB_HOST=postgres.railway.internal
DB_USER=postgres
DB_PASSWORD=UTMxizrlSSbRaTmqUMckIeCdeplUlhXR
DB_NAME=railway
SMTP_LOGIN=your_email@example.com
SMTP_PASSWORD=your_email_password

## Prerequisites
`node server.js`
PostgreSQL: Ensure PostgreSQL is installed and running on your machine.


## Clone the Repository
`git clone https://github.com/yourusername/immersion-day-app.git`
`cd immersion-day-app`

## Usage
Navigate to the Landing Page
Access the landing page of the application in your web browser.
Apply for Immersion Day
Click the "Apply" button to navigate to the form and submit your email,fullname,cohort and province.

