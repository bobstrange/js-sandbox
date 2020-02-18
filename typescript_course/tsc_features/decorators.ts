class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `This boart color is ${this.color}`
  }

  @logError('Something bad')
  pilot(): void {
    throw new Error()
    console.log('swish')
  }
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value
    desc.value = function() {
      try {
        method()
      } catch (e) {
        console.log(errorMessage)
      }
    }
    console.log('Target:', target)
    console.log('Key:', key)
  }
}

const boat = new Boat
boat.pilot()
