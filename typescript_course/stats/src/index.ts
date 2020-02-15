import { MatchReader } from './MatchReader'
import { Summary } from './Summary'

const matchReader = MatchReader.fromCSV('input.csv')
matchReader.load()

const summary = Summary.winsAnalysisWithHTMLReport('Man United')
summary.buildAndPrintReport(matchReader.matches)
