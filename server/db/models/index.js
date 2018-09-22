const User = require('./user')
const Solution = require('./solution')
const Symptom = require('./symptom')

Symptom.belongsToMany(Solution, {through: 'symp_sol'})
Solution.belongsToMany(Symptom, {through: 'symp_sol'})

module.exports = {
  User,
  Solution,
  Symptom
}
