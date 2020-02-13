import { MatchResult } from "./MatchResult"
import { MatchReader } from "./MatchReader"

const reader = new MatchReader('input.csv')
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
