'use strict'

const db = require('../server/db')
const {User, Symptom, Solution} = require('../server/db/models')
const SympSol = db.model('symp_sol')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      name: 'Tess',
      email: 'tesswolterstorff@gmail.com',
      password: '123'
    }),
    User.create({
      name: 'Tugce',
      email: 'tugce.coskun27@gmail.com',
      password: '123'
    })
  ])

  const symptoms = await Promise.all([
    Symptom.create({name: 'cramps', category: 'physical'}),
    Symptom.create({name: 'sleeplessness', category: 'physical'}),
    Symptom.create({name: 'high stress', category: 'menemo'}),
    Symptom.create({name: 'loose bowels', category: 'physical'}),
    Symptom.create({name: 'acne', category: 'physical'}),
    Symptom.create({name: 'bloating', category: 'physical'}),
    Symptom.create({name: 'heavy flow', category: 'physical'}),
    Symptom.create({name: 'low energy', category: 'physical'}),
    Symptom.create({name: 'increased libido', category: 'physical'}),
    Symptom.create({name: 'headache', category: 'physical'}),
    Symptom.create({name: 'heartburn', category: 'physical'}),
    Symptom.create({name: 'nausea & vomiting', category: 'physical'}),
    Symptom.create({name: 'sore breasts', category: 'physical'}),
    Symptom.create({name: 'cravings', category: 'physical'}),
    Symptom.create({name: 'increased appetite', category: 'physical'}),
    Symptom.create({name: 'leakage', category: 'physical'}),
    Symptom.create({name: 'worsened focus', category: 'menemo'}),
    Symptom.create({name: 'self-consciousness', category: 'menemo'}),
    Symptom.create({name: 'sensitivity & teariness', category: 'menemo'})
  ])

  const solutions = await Promise.all([
    Solution.create({
      name: 'edibles',
      description: 'blah blah blah',
      likecount: 0
    }),
    Solution.create({
      name: 'masturbation',
      description: "Nature's painkiller ¯\\_(ツ)_/¯",
      likecount: 0
    }),
    Solution.create({
      name: 'avoid caffeine',
      description:
        "I'm a coffee addict, but I know it worsens my anxiety and exacerbates my cramps. So I try to cut back a bit when I'm on my period.",
      likecount: 0
    }),
    Solution.create({
      name: 'bubble bath',
      description: 'Nothing relaxes me more. I go all out: bubbles, bath bombs, candles, good music, dim lights.',
      likecount: 0
    }),
    Solution.create({
      name: 'iron-rich foods',
      description: 'blah blah blah',
      likecount: 0
    }),
    Solution.create({
      name: 'iron supplement',
      description: "I can become anemic during my period, so I try to remember to take an iron supplement to keep my energy levels up.",
      likecount: 0
    }),
    Solution.create({
      name: 'exercise',
      description: 'blah blah blah',
      likecount: 0
    }),
    Solution.create({
      name: 'alone time',
      description: 'blah blah blah',
      likecount: 0
    }),
    Solution.create({
      name: 'indulge your cravings',
      description: "I eat whatever I want and don't feel bad about it. It makes things a bit more bearable.",
      likecount: 0
    }),
    Solution.create({
      name: 'ocean noises',
      description: 'blah blah blah',
      likecount: 0
    }),
    Solution.create({
      name: 'extra sleep',
      description: 'blah blah blah',
      likecount: 0
    }),
    Solution.create({
      name: 'herbal tea',
      description: 'blah blah blah',
      likecount: 0
    }),
    Solution.create({
      name: 'avoid alcohol',
      description: "'blah blah blah'",
      likecount: 0
    }),
    Solution.create({
      name: 'heating pad',
      description: "agfa",
      likecount: 0
    }),
    Solution.create({
      name: 'stay hydrated',
      description: "This is obviously something you should do all the time, but during my period it's sort of a mental thing as well: I imagine anything bad in my skin or my mind is getting flushed out",
      likecount: 0
    }),
    Solution.create({
      name: 'use a tracking app',
      description: 'blah blah blah',
      likecount: 0
    }),
    Solution.create({
      name: 'healthy foods',
      description: 'blah blah blah',
      likecount: 0
    }),
    Solution.create({
      name: 'painkillers',
      description: "Over-the-counter painkillers tend to ease a wide range of pains and discomforts and help me go about my day as usual",
      likecount: 0
    }),
    Solution.create({
      name: 'stay in bed',
      description: "If I can swing it, I stay in bed. Easier to do on the weekends of course, but I have a flexible work-from-home policy and I take full advantage when I'm on my period",
      likecount: 0
    }),
    Solution.create({
      name: 'write',
      description: "I get pretty overcome by emotion of all sorts, and writing it down in a diary, or just as a note on my phone, help relieve me of the intensity and clears my mind",
      likecount: 0
    })
  ])

  const sympsol = await Promise.all([
    SympSol.create({symptomId: 1, solutionId: 1}),
    SympSol.create({symptomId: 1, solutionId: 2}),
    SympSol.create({symptomId: 1, solutionId: 3}),
    SympSol.create({symptomId: 2, solutionId: 1}),
    SympSol.create({symptomId: 2, solutionId: 3}),
    SympSol.create({symptomId: 3, solutionId: 1}),
    SympSol.create({symptomId: 3, solutionId: 2}),
    SympSol.create({symptomId: 3, solutionId: 3})
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
