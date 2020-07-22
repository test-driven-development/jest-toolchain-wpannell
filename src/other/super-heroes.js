const superHeroes = [
  {name: 'Dynaguy', powers: ['disintegration ray', 'fly']},
  {name: 'Apogee', powers: ['disintegration ray', 'fly']},
  {name: 'Blazestone', powers: ['disintegration ray', 'fly']},
  {name: 'Frozone', powers: ['gravity control', 'fly']},
  {
    name: 'Mr. Incredible',
    powers: ['control of fire', 'pyrotechnic discharges'],
  },
  {name: 'Elastigirl', powers: ['freeze water']},
  {name: 'Violet', powers: ['physical strength']},
  {name: 'Dash', powers: ['speed']},
  {name: 'Jack-Jack', powers: ['shapeshifting ray', 'fly']},
]

export function getFlyingSuperHeroes() {
  return superHeroes.filter(hero => {
    return hero.powers.includes('fly')
  })
}
