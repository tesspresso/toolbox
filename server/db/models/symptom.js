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

// Symptom.findPhysical = function() {
//   return this.findAll({
//     where: {
//       category: 'physical'
//     }
//   })
// }

// Symptom.findMenEmo = function() {
//   return this.findAll({
//     where: {
//       category: 'mental/emotional'
//     }
//   })
// }

module.exports = Symptom
