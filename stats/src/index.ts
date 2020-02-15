import { MatchReader } from './MatchReader'
import { CSVFileReader } from './CSVFileReader'
import { Summary } from './Summary'
import { WinsAnalysis } from './analyzer/WinsAnalysis'
import { ConsoleReport } from './report_targets/ConsoleReport'
import { HTMLReport } from './report_targets/HTMLReport'

const csvFileReader = new CSVFileReader('input.csv')
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summary  = new Summary(
  new WinsAnalysis('Man United'),
  // new ConsoleReport()
  new HTMLReport()
)
summary.buildAndPrintReport(matchReader.matches)
