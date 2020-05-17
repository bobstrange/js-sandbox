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
