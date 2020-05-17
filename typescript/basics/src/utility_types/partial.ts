interface Starship {
  name: string
  enableHyperjump: boolean
}

const updateStarship = (id: number, starship: Partial<Starship>) => {}
updateStarship(1, { name: 'Explorer' })
