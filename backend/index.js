const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./src/routes/index');
const db = require('./src/config/db')

const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const session = require('express-session')
const flash = require('connect-flash');

app.use(cookieParser())
app.use(fileUpload());

app.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000},
  resave: false,
  saveUninitialized: false
}));
app.use(flash());

//connect mysql
db.sequelize;
//install folder public images
app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
app.use(morgan('combined'));
// Template


//middewere
app.use(express.urlencoded({
  extended : true
}));
app.use(express.json());

// routing

route(app);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});