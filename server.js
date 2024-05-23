const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const pairingsRouter = require('./routes/pairings');

// Configuration Variables
const PORT = process.env.PORT || 3000
const app = express();

//Middleware pipeline
app.use(cors());
app.use(express.json());
app.use(logger('dev'));


//Routers
app.get('/', (req, res) => {
    res.send('welcome!');
  });

app.use('/pairings', pairingsRouter); 


// Request Listener
app.listen(PORT, function() {
  console.log(`Server running on ${PORT}`);
});