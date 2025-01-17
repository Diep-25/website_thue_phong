
require('dotenv').config();
const db = require('../../config/db');
const orderModel = require('../models/orderModel')
const productModel = require('../models/productModel')
const validator = require('validator');
const mail = require('../../util/sendMail');
const { mutipleConvertToObject } = require('../../util/convert');


class ConfigController {

    async index(req, res) {
        try {
            const orderData = await orderModel.findAll({
                attributes: ['id', 'email', 'phone', 'full_name', 'note', 'student_number', 'date'],
                include: [
                    {
                        model: productModel,
                        as: 'product'
                    },
                ],
                

            })
            const orders = mutipleConvertToObject(orderData);

            res.json({
                success: true,
                message: 'Lấy data thành công!',
                data: orders
            }, 200)
        } catch (error) {
            res.json({
                success: false,
                message: 'Lấy data thất bại!'
            }, 404)
        }

    }

    async insert(req, res, next) {
        const { email, phone, full_name, note, student_number, product_id } = req.body;

        if (!validator.isEmail(email)) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'Email không đúng định dạng'
                }
            );
        }

        if (!validator.isMobilePhone(phone, 'vi-VN')) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'Số điện thoại không đúng định dạng'
                }
            );
        }

        if (!validator.isLength(full_name, { min: 1 })) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'Bắt buộc nhập tên đầy đủ'
                }
            );
        }

        if (!product_id) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'Bắt buộc có phòng để đặt'
                }
            );
        }

        const product = await productModel.findByPk(product_id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Phòng không tồn tại!'
            });
        }

        await product.update({
            status: 0,
        });

        await orderModel.create({
            email,
            phone,
            full_name,
            product_id,
            note: note || null,
            student_number: student_number || 0
        })

        await mail.sendMail({
            from: '"Website đặt phòng" <ngoquangdiep2001@gmail.com>',
            to: `${email}, ngoquangdiep2001@gmail.com`,
            subject: "Đặt phòng",
            text: `Email: ${email}, Số điện thoại: ${phone} đặt phòng vào ngày ${ new Date}`,
        });

        return res.json({
            success: true,
            message: 'Đặt phòng thành công!',
        });

    }

}

module.exports = new ConfigController;