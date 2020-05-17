// Partial

interface Starship {
  name: string
  enableHyperjump: boolean
}

const updateStarship = (id: number, starship: Partial<Starship>) => {}
updateStarship(1, { name: 'Explorer' })

// Record

const starships: Record<string, Starship> = {
  Explorer1: {
    name: 'Explorer1',
    enableHyperjump: true
  },
  Explorer2: {
    name: 'Explorer2',
    enableHyperjump: false
  }
}

// Pick

type StarshipNameOnly = Pick<Starship, 'name'>

// Omit

type StarshipWithoutName = Omit<Starship, 'name'>

// NonNullable

interface StarshipProperties {
  color?: 'red' | 'green' | 'blue'
}

const paintStarship = (
  id: number,
  color: NonNullable<StarshipProperties['color']>
) => {}

// Want to make the following error
// paintStarship(1, undefined)

// Exclude

type AvailableDrinks = 'Coffee' | 'Tea' | 'Orange Juice' | 'Lemonade' | 'Coke'

let johnsDrink: AvailableDrinks
johnsDrink = 'Tea'

type DrinksJaneDoesntLike = 'Coffee' | 'Coke'
let janesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>

janesDrink = 'Orange Juice' // 'Tea' | 'Orange Juice' | 'Lemonade

// Extract

type DrinksJaneLikes = 'Tea' | 'Orange Juice' | 'Red Bull'

let janesDrinkAlter: Extract<AvailableDrinks, DrinksJaneLikes>
janesDrinkAlter = 'Orange Juice' // 'Tea' | 'Orange Juice' (Red Bull is not here)

