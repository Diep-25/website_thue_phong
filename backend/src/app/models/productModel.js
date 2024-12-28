const db = require('../../config/db');
const {DataTypes} = require("sequelize");

const ProductModel = db.sequelize.define("products", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, maxLength: 255 },
    content: { type: DataTypes.STRING, maxLength: 255 },
    image: { type: DataTypes.STRING, maxLength: 255 },
    status: { type: DataTypes.INTEGER, defaultValue: 1 },
});

module.exports = ProductModel