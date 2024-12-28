
require('dotenv').config();
const db = require('../../config/db');
const configModel = require('../models/configModel')
const { mutipleConvertToObject } = require('../../util/convert');


class ConfigController {

    async index(req, res, next) {
        try {
            const configData = await configModel.findAll({
                attributes: ['id', 'key', 'content'],

            })
            const configs = mutipleConvertToObject(configData);

            res.json({
                success: true,
                message: 'Lấy data thành công!',
                data: configs
            }, 200)
        } catch (error) {
            res.json({
                success: false,
                message: 'Lấy data thất bại!'
            }, 500)
        }

    }

    async edit(req, res, next) {
        const { id } = req.params

        configModel.findOne({
            attributes: ['id', 'key', 'content'],
            where: { id: id }
        }).then(product => {

            res.json({
                success: true,
                message: 'Lấy data thành công!',
                data: product.dataValues
            }, 200)
        }).catch(() => {
            res.json({
                success: false,
                message: 'Lấy data thất bại!'
            }, 500)
        })

    }

    async update(req, res, next) {
        const { id } = req.params
        const { key, content } = req.body;
        try {
            const config = await configModel.findByPk(id);
            if (!config) {
                return res.status(404).json({
                    success: false,
                    message: 'Config không tồn tại!'
                });
            }

            await configModel.update({
                key,
                content,
            });

            return res.json({
                success: true,
                message: 'Cập nhật config thành công!',
            });
        } catch (error) {
            
        }

    }

}

module.exports = new ConfigController;