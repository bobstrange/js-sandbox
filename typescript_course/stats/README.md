# Memo

## How to solve nodejs standard lib type ?
You need to install `@types/node`

## Design


```ts
/**
 *  AnalyzerはMatchDataを受け取って、解析結果を返す
 */
interface Analyzer {
  run(matches: MatchData[]): string
}
class AverageGoalsAnalysis {}
class WinsAnalysis {}

/**
 *  OutputTargetは、文字列を受け取ってどこかに出力する
 */
interface  OutputTarget {
  print(report: string): void
}
class ConsoleReport {}
class HtmlReport {}

/**
 *  Summaryは analyzer と outputTarget の参照を持ち、解析結果を出力する
 */
class Summary {
  analyzer: Analyzer
  outputTarget: OutputTarget
  buildAndPrintReport(MatchData[]): void
}
```
