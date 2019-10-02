const Sequelize = require('sequelize');


//Initialize User
module.exports = (sequelize) => {
  class User extends Sequelize.Model {}
  User.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Please provide a first name`
        },
        notEmpty: {
          msg: `Please provide a first name`
        }
      }
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Please provide a last name`
        }, 
        notEmpty: {
          msg: `Please provide a last name`
        }
      }
    },
    emailAddress: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Please provide an email address`
        },
        notEmpty: {
          msg: `Please provide an email address`
        },
        isEmail: {
          msg: "Email address must be in a valid format, e.g. xyz@example.com"
        }
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Please provide a password`
        }, 
        notEmpty: {
          msg: `Please provide a password`
        }
      }
    },
  }, {
    sequelize
  });
  User.associate = function (models) {
    User.hasMany(models.Course);
  };
  return User;
};