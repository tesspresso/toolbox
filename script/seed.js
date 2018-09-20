'use strict'

const db = require('../server/db')
const {User, Symptom, Solution} = require('../server/db/models')
const SympSol = db.model('symp_sol')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      name: 'tess',
      email: 'tesswolterstorff@gmail.com',
      password: '123'
    })
  ])

  const symptoms = await Promise.all([
    Symptom.create({name: 'cramps', category: 'physical'}),
    Symptom.create({name: 'sleeplessness', category: 'physical'})
  ])

  const solutions = await Promise.all([
    Solution.create({
      name: 'marijuana',
      description: 'blah blah blah',
      likecount: 0
    }),
    Solution.create({
      name: 'masturbation',
      description: 'blah blah blah',
      likecount: 0
    }),
    Solution.create({
      name: 'avoid caffeine',
      description: 'blah blah blah',
      likecount: 0
    })
  ])

  const sympsol = await Promise.all([
    SympSol.create({symptomId: 1, solutionId: 1}),
    SympSol.create({symptomId: 1, solutionId: 2}),
    SympSol.create({symptomId: 1, solutionId: 3}),
    SympSol.create({symptomId: 2, solutionId: 1}),
    SympSol.create({symptomId: 2, solutionId: 3})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${symptoms.length} symptoms`)
  console.log(`seeded ${solutions.length} solutions`)
  console.log(`seeded ${sympsol.length} symp_sols`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
