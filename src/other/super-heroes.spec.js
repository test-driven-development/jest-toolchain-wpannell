import {getFlyingSuperHeroes} from './super-heroes'

test('filters super heroes that fly', () => {
  const flyingHeroes = getFlyingSuperHeroes()
  expect(flyingHeroes).toMatchInlineSnapshot(`
    Array [
      Object {
        "name": "Dynaguy",
        "powers": Array [
          "disintegration ray",
          "fly",
        ],
      },
      Object {
        "name": "Apogee",
        "powers": Array [
          "disintegration ray",
          "fly",
        ],
      },
      Object {
        "name": "Blazestone",
        "powers": Array [
          "disintegration ray",
          "fly",
        ],
      },
      Object {
        "name": "Frozone",
        "powers": Array [
          "gravity control",
          "fly",
        ],
      },
      Object {
        "name": "Jack-Jack",
        "powers": Array [
          "shapeshifting ray",
          "fly",
        ],
      },
    ]
  `)
})
