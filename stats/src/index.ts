import fs from 'fs'

const matches = fs.readFileSync(
    'input.csv',
    {
      encoding: 'utf-8'
    }
  )
  .split("\n")
  .map((row: string) => row.split(','))


let manUnitedWins = 0
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins += 1
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins += 1
  }
}

console.log(manUnitedWins)
