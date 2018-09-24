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

  const solutions = async () => {
    const sol1 = await Solution.create({
      //1
      name: 'have an edible',
      description:
        'If my period falls on the weekend, I have an edible in the morning and spend the day relaxing at home and watching movies. It helps with physical discomfort, relaxes me, and helps to fast-forward through storm.',
      likecount: 0
    })
    const sol2 = await Solution.create({
      //2
      name: 'orgasm',
      description:
        "Nature's painkiller ¯\\_(ツ)_/¯ But really, orgasms help you deal with all sorts of physical pain, as well as anxiety and stress. Sometimes sex lightens flow (and for some people it can stop their period entirely).",
      likecount: 0
    })
    const sol3 = await Solution.create({
      //3
      name: 'avoid caffeine',
      description:
        "I'm a coffee addict, but I know it worsens my anxiety and exacerbates my cramps, so I try to cut back a bit when I'm on my period.",
      likecount: 0
    })
    const sol4 = await Solution.create({
      //4
      name: 'take a bath',
      description:
        'This is my go-to stress reliever. I go all out: bubbles, bath bombs, candles, good music, dim lights. I always feel better, or at least more relaxed, afterwards',
      likecount: 0
    })
    const sol5 = await Solution.create({
      //5
      name: 'go for iron-rich foods',
      description:
        'I do my best to eat foods that are high in iron to keep my focus and energy levels up. Things like dark leafy greens, legumes, oysters...even dark chocolate!',
      likecount: 0
    })
    const sol6 = await Solution.create({
      //6
      name: 'take an iron supplement',
      description:
        'I can become anemic during my period, so I try to remember to take an iron supplement to keep myself feeling mentally and physically normal.',
      likecount: 0
    })
    const sol7 = await Solution.create({
      //7
      name: 'exercise',
      description:
        "It's HARD to get myself to exercise when I'm on my period, but I always end up feeling better. Often I'll just do a workout at home, and will go for something like yoga over running. I never regret it afterwards -- My mood and stress levels in particular really shift.",
      likecount: 0
    })
    const sol8 = await Solution.create({
      //8
      name: 'find alone time',
      description:
        'Sometimes I just feel a mess and carving out alone time is the best option. It helps me recharge and avoid triggers that might stress me out more.',
      likecount: 0
    })
    const sol9 = await Solution.create({
      //9
      name: 'indulge your cravings',
      description:
        "I indulge, and not just in terms of food. I eat whatever I want and don't feel bad about it, binge-watch a series on Netflix, or whatever else comes to mind. Allowing myself that guilt-free freedom makes things a bit more bearable.",
      likecount: 0
    })
    const sol10 = await Solution.create({
      //10
      name: 'listen to ocean noises',
      description:
        "It sounds cheesy, but ocean noises relax me sooo much. Sometimes I put it on my headphones at work. Listening also puts my mind to rest when I'm falling asleep",
      likecount: 0
    })
    const sol11 = await Solution.create({
      //11
      name: 'get extra sleep',
      description:
        "Making myself get up early, and adjusting my schedule so that I can wake up a bit later than usual can really impact my day. I always try to schedule for an hour or so of extra sleep while I'm on my period.",
      likecount: 0
    })
    const sol12 = await Solution.create({
      //12
      name: 'drink herbal tea',
      description:
        "I drink herbal tea (usually camomile or ginger) constantly when I'm on my period. The smell and the warth are soothing and eases any stomach issues I might be having.",
      likecount: 0
    })
    const sol13 = await Solution.create({
      //13
      name: 'avoid alcohol',
      description:
        "Alcohol doesn't do you any favors, so I found it's best to just ban myself from it entirely during my period. It's just a good strategy to avoid exacerbating any discomforts you might already be feeling.",
      likecount: 0
    })
    const sol14 = await Solution.create({
      //14
      name: 'use a heating pad',
      description:
        'I get horrific cramps, and a heating pad both helps the pain and is super relaxing.',
      likecount: 0
    })
    const sol15 = await Solution.create({
      //15
      name: 'stay hydrated',
      description:
        "Obviously we should all be drinking adequate water all the time -- it helps with skin, headaches, cravings, everything. But during my period it's sort of a mental thing as well: I imagine anything bad in my mind -- negativity, anxieties, etc. -- is getting flushed out",
      likecount: 0
    })
    const sol16 = await Solution.create({
      //16
      name: 'use a tracking app',
      description:
        "I use the app Clue, and it has changed my life. Just being able to look at my phone and see that it's totally normal for me to be feeling this way or to be having these thoughts puts me at ease. It's an important reminder that this is all normal and temporary. But it also indicates if something abnormal is happening, and makes it easy to share the data with your doctor.",
      likecount: 0
    })
    const sol17 = await Solution.create({
      //17
      name: 'eat healthy foods',
      description:
        "I find that being extra conscious about what I put in my body can really help my general well-being. I get cravings for sure, but try to avoid ones that would take a toll on my body since it's already feeling off",
      likecount: 0
    })
    const sol18 = await Solution.create({
      //18
      name: 'take painkillers',
      description:
        'Over-the-counter painkillers take the edge off a wide range of pains and discomforts, and help me go about my day as usual',
      likecount: 0
    })
    const sol19 = await Solution.create({
      //19
      name: 'stay in bed',
      description:
        "If I can swing it, I stay in bed. Easier to do on the weekends of course, but I have a flexible work-from-home policy and I take full advantage when I'm on my period",
      likecount: 0
    })
    const sol20 = await Solution.create({
      //20
      name: 'write',
      description:
        'I get pretty overcome by emotion of all sorts, and writing my thoughts in a diary, or just as a note on my phone, helps relieve me of the intensity and clears my mind',
      likecount: 0
    })
    return [
      sol1,
      sol2,
      sol3,
      sol4,
      sol5,
      sol6,
      sol7,
      sol8,
      sol9,
      sol10,
      sol11,
      sol12,
      sol13,
      sol14,
      sol15,
      sol16,
      sol17,
      sol18,
      sol19,
      sol20
    ]
  }

  const solutionSeed = await solutions()

  const symptoms = async () => {
    const symp1 = await Symptom.create({name: 'cramps', category: 'physical'}) //1
    const symp2 = await Symptom.create({name: 'sleeplessness', category: 'physical'}) //2
    const symp3 = await Symptom.create({name: 'high stress', category: 'menemo'}) //3
    const symp4 = await Symptom.create({name: 'loose bowels', category: 'physical'}) //4
    const symp5 = await Symptom.create({name: 'acne', category: 'physical'}) //5
    const symp6 = await Symptom.create({name: 'bloating', category: 'physical'}) //6
    const symp7 = await Symptom.create({name: 'heavy flow', category: 'physical'}) //7
    const symp8 = await Symptom.create({name: 'low energy', category: 'physical'}) //8
    const symp9 = await Symptom.create({name: 'increased libido', category: 'physical'}) //9
    const symp10 = await Symptom.create({name: 'headache', category: 'physical'}) //10
    const symp11 = await Symptom.create({name: 'heartburn', category: 'physical'}) //11
    const symp12 = await Symptom.create({name: 'nausea & vomiting', category: 'physical'}) //12
    const symp13 = await Symptom.create({name: 'cravings', category: 'physical'}) //13
    const symp14 = await Symptom.create({name: 'increased appetite', category: 'physical'}) //14
    const symp15 = await Symptom.create({name: 'worsened focus', category: 'menemo'}) //15
    const symp16 = await Symptom.create({name: 'self-consciousness', category: 'menemo'}) //16
    const symp17 = await Symptom.create({name: 'sensitivity & teariness', category: 'menemo'}) //17
    return [symp1, symp2, symp3, symp4, symp5, symp6, symp7, symp8, symp9, symp10, symp11, symp12, symp13, symp14, symp15, symp16, symp17]
  }

  const symptomSeed = await symptoms()

  const sympsol = await Promise.all([
    SympSol.create({symptomId: 1, solutionId: 1}),
    SympSol.create({symptomId: 1, solutionId: 2}),
    SympSol.create({symptomId: 1, solutionId: 3}),
    SympSol.create({symptomId: 1, solutionId: 13}),
    SympSol.create({symptomId: 1, solutionId: 14}),
    SympSol.create({symptomId: 1, solutionId: 18}),
    SympSol.create({symptomId: 1, solutionId: 19}),

    SympSol.create({symptomId: 2, solutionId: 1}),
    SympSol.create({symptomId: 2, solutionId: 2}),
    SympSol.create({symptomId: 2, solutionId: 3}),
    SympSol.create({symptomId: 2, solutionId: 4}),
    SympSol.create({symptomId: 2, solutionId: 5}),
    SympSol.create({symptomId: 2, solutionId: 6}),
    SympSol.create({symptomId: 2, solutionId: 7}),
    SympSol.create({symptomId: 2, solutionId: 10}),
    SympSol.create({symptomId: 2, solutionId: 12}),
    SympSol.create({symptomId: 2, solutionId: 20}),

    SympSol.create({symptomId: 3, solutionId: 1}),
    SympSol.create({symptomId: 3, solutionId: 2}),
    SympSol.create({symptomId: 3, solutionId: 3}),
    SympSol.create({symptomId: 3, solutionId: 4}),
    SympSol.create({symptomId: 3, solutionId: 7}),
    SympSol.create({symptomId: 3, solutionId: 8}),
    SympSol.create({symptomId: 3, solutionId: 10}),
    SympSol.create({symptomId: 3, solutionId: 12}),
    SympSol.create({symptomId: 3, solutionId: 16}),
    SympSol.create({symptomId: 3, solutionId: 20}),

    SympSol.create({symptomId: 4, solutionId: 3}),
    SympSol.create({symptomId: 4, solutionId: 12}),
    SympSol.create({symptomId: 4, solutionId: 13}),
    SympSol.create({symptomId: 4, solutionId: 15}),
    SympSol.create({symptomId: 4, solutionId: 17}),
    SympSol.create({symptomId: 4, solutionId: 19}),

    SympSol.create({symptomId: 5, solutionId: 7}),
    SympSol.create({symptomId: 5, solutionId: 11}),
    SympSol.create({symptomId: 5, solutionId: 12}),
    SympSol.create({symptomId: 5, solutionId: 13}),
    SympSol.create({symptomId: 5, solutionId: 15}),
    SympSol.create({symptomId: 5, solutionId: 17}),

    SympSol.create({symptomId: 6, solutionId: 7}),
    SympSol.create({symptomId: 6, solutionId: 12}),
    SympSol.create({symptomId: 6, solutionId: 13}),
    SympSol.create({symptomId: 6, solutionId: 15}),
    SympSol.create({symptomId: 6, solutionId: 17}),

    SympSol.create({symptomId: 7, solutionId: 2}),
    SympSol.create({symptomId: 7, solutionId: 5}),
    SympSol.create({symptomId: 7, solutionId: 6}),
    SympSol.create({symptomId: 7, solutionId: 7}),
    SympSol.create({symptomId: 7, solutionId: 11}),
    SympSol.create({symptomId: 7, solutionId: 16}),
    SympSol.create({symptomId: 7, solutionId: 19}),

    SympSol.create({symptomId: 8, solutionId: 5}),
    SympSol.create({symptomId: 8, solutionId: 6}),
    SympSol.create({symptomId: 8, solutionId: 8}),
    SympSol.create({symptomId: 8, solutionId: 11}),
    SympSol.create({symptomId: 8, solutionId: 17}),
    SympSol.create({symptomId: 8, solutionId: 19}),

    SympSol.create({symptomId: 9, solutionId: 2}),
    SympSol.create({symptomId: 9, solutionId: 4}),
    SympSol.create({symptomId: 9, solutionId: 7}),
    SympSol.create({symptomId: 9, solutionId: 8}),
    SympSol.create({symptomId: 9, solutionId: 9}),

    SympSol.create({symptomId: 10, solutionId: 1}),
    SympSol.create({symptomId: 10, solutionId: 2}),
    SympSol.create({symptomId: 10, solutionId: 4}),
    SympSol.create({symptomId: 10, solutionId: 5}),
    SympSol.create({symptomId: 10, solutionId: 6}),
    SympSol.create({symptomId: 10, solutionId: 11}),
    SympSol.create({symptomId: 10, solutionId: 13}),
    SympSol.create({symptomId: 10, solutionId: 15}),
    SympSol.create({symptomId: 10, solutionId: 17}),
    SympSol.create({symptomId: 10, solutionId: 18}),

    SympSol.create({symptomId: 11, solutionId: 3}),
    SympSol.create({symptomId: 11, solutionId: 12}),
    SympSol.create({symptomId: 11, solutionId: 13}),
    SympSol.create({symptomId: 11, solutionId: 15}),
    SympSol.create({symptomId: 11, solutionId: 17}),

    SympSol.create({symptomId: 12, solutionId: 1}),
    SympSol.create({symptomId: 12, solutionId: 3}),
    SympSol.create({symptomId: 12, solutionId: 11}),
    SympSol.create({symptomId: 12, solutionId: 12}),
    SympSol.create({symptomId: 12, solutionId: 13}),
    SympSol.create({symptomId: 12, solutionId: 15}),
    SympSol.create({symptomId: 12, solutionId: 16}),
    SympSol.create({symptomId: 12, solutionId: 17}),
    SympSol.create({symptomId: 12, solutionId: 19}),

    SympSol.create({symptomId: 13, solutionId: 5}),
    SympSol.create({symptomId: 13, solutionId: 6}),
    SympSol.create({symptomId: 13, solutionId: 7}),
    SympSol.create({symptomId: 13, solutionId: 9}),
    SympSol.create({symptomId: 13, solutionId: 12}),
    SympSol.create({symptomId: 13, solutionId: 15}),

    SympSol.create({symptomId: 14, solutionId: 5}),
    SympSol.create({symptomId: 14, solutionId: 7}),
    SympSol.create({symptomId: 14, solutionId: 12}),
    SympSol.create({symptomId: 14, solutionId: 15}),
    SympSol.create({symptomId: 14, solutionId: 17}),

    SympSol.create({symptomId: 15, solutionId: 5}),
    SympSol.create({symptomId: 15, solutionId: 6}),
    SympSol.create({symptomId: 15, solutionId: 7}),
    SympSol.create({symptomId: 15, solutionId: 11}),
    SympSol.create({symptomId: 15, solutionId: 16}),
    SympSol.create({symptomId: 15, solutionId: 17}),

    SympSol.create({symptomId: 16, solutionId: 3}),
    SympSol.create({symptomId: 16, solutionId: 7}),
    SympSol.create({symptomId: 16, solutionId: 8}),
    SympSol.create({symptomId: 16, solutionId: 16}),
    SympSol.create({symptomId: 16, solutionId: 20}),

    SympSol.create({symptomId: 17, solutionId: 4}),
    SympSol.create({symptomId: 17, solutionId: 7}),
    SympSol.create({symptomId: 17, solutionId: 8}),
    SympSol.create({symptomId: 17, solutionId: 11}),
    SympSol.create({symptomId: 17, solutionId: 16}),
    SympSol.create({symptomId: 17, solutionId: 20})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${symptomSeed.length} symptoms`)
  console.log(`seeded ${solutionSeed.length} solutions`)
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
