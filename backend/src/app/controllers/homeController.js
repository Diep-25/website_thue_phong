
class HomeController {

    // get
    async index(req, res, next) {

        res.send('Home');
    }




}

module.exports = new HomeController;