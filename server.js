require('dotenv').config();
const express = require('express');
const passport = require('passport');
const { initPassport } = require('./src/config/passport');
const errorHandler = require('./src/utils/errorHandler');
const v1Routes = require('./src/routes/v1');

const app = express();

// Middleware
app.use(express.json());
app.use(passport.initialize());
initPassport(passport);

// Routes
app.use('/api/v1', v1Routes);

// Global error handler
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
