export class Person {
  constructor(firstname, lastname, ssn) {
    this.firstname = firstname
    this.lastname = lastname
    this.ssn = ssn
    this.address = null
    this.birthYear = null
  }

  toString() {
    return `Person(${this.firstname}, ${this.lastname})`
  }

  peopleInSameCountry(friends) {
    // この例どうなん？
    // filter とか普通使わない？
    const result = []
    for (const friend in friends) {
      if (this.address.country === friends[friend].address.country) {
        result.push(friend)
      }
    }
    return result
  }
}
