const db = require('../../config/db');
const {DataTypes} = require("sequelize");

const ProductModel = db.sequelize.define("products", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, maxLength: 255 },
    content: { type: DataTypes.TEXT },
    image: { type: DataTypes.STRING, maxLength: 255 },
    equipment: { type: DataTypes.STRING, maxLength: 255 },
    contains: { type: DataTypes.STRING, maxLength: 255 },
    description : { type: DataTypes.STRING, maxLength: 255 },
    price: { type: DataTypes.STRING, maxLength: 255 },
    capacity: { type: DataTypes.STRING, maxLength: 255 },
    isSpecial : { type: DataTypes.BOOLEAN, maxLength: false },
    status: { type: DataTypes.INTEGER, defaultValue: 1 },
}, {
    timestamps: true,
});

module.exports = ProductModel