const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); 

const app = express();

app.use(cors({
  origin: ['http://127.0.0.1:5500', 'http://127.0.0.1:5501'], 
}));

app.use(bodyParser.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_LOGIN,
    pass: process.env.SMTP_PASSWORD,
  }
});

app.post('/api/apply', async (req, res) => {
  const { email, fullName, cohort, province } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO applications(email, fullName, cohort, province) VALUES($1, $2, $3, $4) RETURNING *',
      [email, fullName, cohort, province]
    );

    const mailOptions = {
      from: process.env.SMTP_LOGIN, 
      to: email,
      subject: 'Application Confirmation',
      text: `Hi ${fullName},\n\nThank you for applying to attend the Umuzi X BBD Immersion program for cohort ${cohort} in ${province}. We have received your application and confirmed your spot.\n\nBest regards,\nUmuzi X BBD Immersion Team`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(200).json({ message: 'Application submitted successfully!', data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit application.', error });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
