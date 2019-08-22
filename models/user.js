
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Sequelize.Model { }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passwd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, { sequelize, modelName: 'User', tableName: 'users' });
  User.associate = function (models) {
    // Address.belongsTo(models.attendeeGroup, {
    //   onDelete: 'CASCADE',
    //   foreignKey: {
    //     allowNull: false
    //   },
    // });
  }
  return User;
};