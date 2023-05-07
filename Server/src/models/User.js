const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true,
      },
      password: {
         type: DataTypes.STRING(64),
         allowNull: false,
      },
   }, { timestamps: false });
};
