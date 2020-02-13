import { CSVFileReader } from "./CSVFileReader"
import { MatchResult } from "./MatchResult"

const reader = new CSVFileReader('input.csv')
reader.read()

const dateOfFirstMatch = reader.data[0][0]

let manUnitedWins = 0
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins += 1
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins += 1
  }
}

console.log(manUnitedWins)
