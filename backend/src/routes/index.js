const homeRouter = require('./home');
const productRouter = require('./product');
const configRouter = require('./config');
const orderRouter = require('./order');

function route(app) {

    app.use('/api', homeRouter);

    app.use('/api/config', configRouter);

    app.use('/api/product', productRouter);

    app.use('/api/order', orderRouter);

}

module.exports = route;
