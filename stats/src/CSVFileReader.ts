import fs from 'fs'

export abstract class CSVFileReader<T> {
  data: T[] = []

  constructor(public filename: string) {}

  read(): void {
    const data = fs.readFileSync(
        this.filename,
        {
          encoding: 'utf-8'
        }
      )
      .split("\n")
      .map((row: string) => row.split(','))
      .map(this.mapRow)
    this.data = data
  }

  abstract mapRow(row: string[]): T
}
