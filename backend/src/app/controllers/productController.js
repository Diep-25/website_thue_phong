
class ProductController {

    // get
    async index(req, res, next) {

        res.send('Product');
    }


}

module.exports = new ProductController;