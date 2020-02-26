export class ConsoleOutput {
  output(...args: string[]): void {
    for (const text of args) {
      console.log(`Output: ${text}`)
    }
  }
}
