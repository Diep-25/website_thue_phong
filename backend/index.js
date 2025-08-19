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
const cors = require('cors');

app.use(cookieParser())
app.use(fileUpload());
app.use(cors());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'], 
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header', 'X-Requested-With', 'Accept', 'Origin', 'Access-Control-Allow-Headers']
}));

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


// middewere
app.use(express.urlencoded({
  extended : true
}));
app.use(express.json());

// routing

route(app);

app.listen(port, () => {
  // console.log(`App listening on http://localhost:${port}`);
});