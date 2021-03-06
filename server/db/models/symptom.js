const Sequelize = require('sequelize')
const db = require('../db')

const Symptom = db.define('symptom', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.ENUM('physical', 'menemo')
  }
})

module.exports = Symptom
