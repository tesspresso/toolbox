const router = require('express').Router()
const {Symptom} = require('../db/models')
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
