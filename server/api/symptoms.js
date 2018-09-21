const router = require('express').Router()
const {Symptom, Solution} = require('../db/models')
module.exports = router

// api/symptoms/:type
// shows list of symptoms based on the type
router.get('/:type', async (req, res, next) => {
  try {
    const type = req.params.type
    const symptoms = await Symptom.findAll({
      where: {
        category: type
      }
    })
    res.json(symptoms)
  } catch (err) {
    next(err)
  }
})

// api/symptoms/:type/:sympid
// shows list of solutions based on the symptomId
router.get('/:type/:symptomId', async (req, res, next) => {
  try {
    const sympId = req.params.symptomId
    const solutions = await Symptom.findAll({
      include: [Solution],
      where: {
        id: sympId
      }
    })
    res.json(solutions[0].solutions)
  } catch (err) {
    next(err)
  }
})
