const {Sequelize} = require("sequelize");
// process.env.MONGODB_URL
const sequelize = new Sequelize(
   'website_thue_phong_moi',

   'root',
   '',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database');
});

module.exports = { sequelize };