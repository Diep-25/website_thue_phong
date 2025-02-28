require("dotenv").config();
const db = require("../../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const userModel = require("../models/userModel");
const productModel = require('../models/productModel');
const VisitsModel = require('../models/visitsModel')
const orderModel = require("../models/orderModel");
const JWT_SECRET = process.env.JWT_SECRET;

class HomeController {

  async dashboard(req, res, next) {
    try {
      const totalRoom = await productModel.count();

      const totalOrder = await orderModel.count();

      const emptyRoom = await productModel.count({
        where: { status: 1 }
      });

      const usingRoom = await productModel.count({
        where: { status: 0 }
      });

      const totalAccess = await VisitsModel.count();


      const data = {
        totalRoom,
        emptyRoom,
        usingRoom,
        totalAccess,
        totalOrder
      }

      return res.json({
        success: true,
        message: 'Lấy data thành công!',
        data: data
      }, 200)

    } catch (error) {
      return res.json({
        success: false,
        message: 'Lấy data thất bại!'
      }, 500)
    }

  }

  async login(req, res, next) {
    const { email, password } = req.body;

    if (!validator.isEmail(email) || !password) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    userModel
      .findOne({
        attributes: ["id", "name", "email", "password"],
        where: { email: email },
      })
      .then(async (user) => {
        const isMatch = await bcrypt.compare(
          password,
          user.dataValues.password
        );

        if (!isMatch) {
          return res.status(400).json({
            success: false,
            message: "Incorrect password",
          });
        }

        const token = jwt.sign(
          { id: user.dataValues.id, email: user.dataValues.email },
          JWT_SECRET,
          { expiresIn: "1h" }
        );
        res.json({
          success: true,
          data: {
            token,
            user: {
              id: user.dataValues.id,
              name: user.dataValues.name,
              email: user.dataValues.email,
            },
          },
        });
      })
      .catch(function (err) {
        res.status(404).json({
          success: false,
          message: "Database error",
        });
      });
  }

  async sumRoom(req, res) {
    try {
      const roomData = await productModel.findAll({
        attributes: [
          "id",
          "name",
          "content",
          "image",
          "status",
          "equipment",
          "contains",
          "description",
          "price",
          "capacity",
          "isSpecial",
        ],
        include: [
          {
            model: productImageModel,
            as: "images",
          },
        ],
      });
      const products = mutipleConvertToObject(productData);

      res.json(
        {
          success: true,
          data: products,
        },
        200
      );
    } catch (error) {
      res.json(
        {
          success: false,
          message: "Lấy data thất bại!",
        },
        404
      );
    }
  }
}

module.exports = new HomeController();
