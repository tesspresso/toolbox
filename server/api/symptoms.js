const router = require('express').Router()
const db = require('../db')
const {Symptom, Solution} = require('../db/models')
const SympSol = db.model('symp_sol')
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

// api/symptoms/:type/:sympid
// updates like count of single solution
router.put('/:type/:symptomId/', async (req, res, next) => {
  try {
    const updateInfo = {
      likecount: req.body.likeCount
    }
    const solution = await Solution.findById(req.body.solId)
    await solution.update(updateInfo)
    res.status(202).json(solution)
  } catch (err) {
    next(err)
  }
})

// api/symptoms/:type
// adds a new symptom
router.post('/:type', async (req, res, next) => {
  const symptom = {
    name: req.body.symptom,
    category: req.body.type
  }
  try {
    const newSymp = await Symptom.create(symptom)
    res.status(201).json(newSymp)
  } catch (error) {
    next(error)
  }
})

// api/symptoms/:type/:sympId
// adds a new solution
router.post('/:type/:sympId', async (req, res, next) => {
  const solution = {
    name: req.body.name,
    description: req.body.description
  }
  try {
    const newSolution = await Solution.create(solution)
    await SympSol.create({
      symptomId: req.params.sympId,
      solutionId: newSolution.id
    })
    res.status(201).json(newSolution)
  } catch (error) {
    next(error)
  }
})
