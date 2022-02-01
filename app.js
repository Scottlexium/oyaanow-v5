const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
dotenv.config();
const cors = require('cors');
const db = require('./config/database');
const bodyParser = require('body-parser')
const port = process.env.PORT || 4659;
// Option 3: Passing parameters separately (other dialects)

app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors());



db.authenticate()
.then(()=> {
    app.listen(port);
    console.log(`Db connected, now listening on http://localhost:${port}`);
})
.catch(err=> console.log(err));

// app.use(expressLayouts);

app.use(authRoutes);

// routes
app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Page not found on the server</h1>")
})
