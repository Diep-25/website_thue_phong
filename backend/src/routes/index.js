const homeRouter = require('./home');
const productRouter = require('./product');
// const isLoggedIn = require('../middleware/authMiddleware');

function route(app) {
    
    // app.use(isLoggedIn);

    app.use('/', homeRouter);

    app.use('/product', productRouter);

}

module.exports = route;
