
require('dotenv').config();
const db = require('../../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const userModel = require('../models/userModel')
const JWT_SECRET = process.env.JWT_SECRET;

class HomeController {

    async syncDB() {
        try {
            await db.sequelize.sync({ force: false }); // `force: true` sẽ xóa và tạo lại bảng nếu tồn tại
            console.log('Database synchronized successfully!');
        } catch (error) {
            console.error('Error synchronizing database:', error);
        }
    };


    // get
    async index(req, res, next) {

        res.send('Home');
    }

    async login(req, res, next) {
        const { email, password } = req.body;
        
        if (!validator.isEmail(email) || !password) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'Invalid email or password'
                }
            );
        }

        userModel.findOne({
            attributes: ['id', 'name', 'email', 'password'],
            where: { email: email }
        }).then(async (user) => {
            const isMatch = await bcrypt.compare(password, user.dataValues.password);
     
            if (!isMatch) {
                return res.status(400).json(
                    {
                        success: false,
                        message: 'Incorrect password'
                    }
                );
            }

            const token = jwt.sign({ id: user.dataValues.id, email: user.dataValues.email }, JWT_SECRET, { expiresIn: '1h' });
            res.json({
                success: true,
                data: {
                    token,
                    user: {
                        id: user.dataValues.id,
                        name: user.dataValues.name,
                        email: user.dataValues.email
                    }
                }
            })
        }).catch(function (err) {
            res.status(500).json({
                success: false,
                message: 'Database error'
            })
        });
    }

}

module.exports = new HomeController;