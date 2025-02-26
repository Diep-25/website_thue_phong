
require('dotenv').config();
const db = require('../../config/db');
const VisitsModel = require('../models/visitsModel')

class VisitsController {

    async recordVisit(req, res, next) {
        try {
            const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
            const userAgent = req.headers["user-agent"];
    
            const visit = await VisitsModel.create({
                ip_address: ip,
                user_agent: userAgent
            });
    
            return res.json({
                success: true,
                message: 'Lấy data thành công!',
                data: visit.id
            }, 200)

        } catch (error) {
            console.log(error);
            
            return res.json({
                success: false,
                message: 'Lấy data thất bại!'
            }, 500)
        }

    }

}

module.exports = new VisitsController;