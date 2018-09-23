const Sequelize = require('sequelize')
const db = require('../db')

const Solution = db.define('solution', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  likecount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Solution
