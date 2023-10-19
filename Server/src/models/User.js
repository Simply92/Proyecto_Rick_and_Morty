const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         type: DataTypes.INTEGER,
         allownull: false,
         primaryKey: true,
         autoIncrement: true,
      },
      name:{
         type:DataTypes.STRING,
         allownull: false,
      },
      lastname:{
         type:DataTypes.STRING,
         allownull: false
      },
      email:{
         type: DataTypes.STRING,
         allownull: false,
         isEmail:true,
      },
      password:{
         type: DataTypes.STRING,
         allownull: false
      },
   }, { timestamps: false });
};
