import { Person } from './person'

export class Student extends Person {
  constructor(firstname, lastname, ssn, school) {
    super(firstname, lastname, ssn)
    this.school = school
  }

  studentsInSameCountryAndSchool(friends) {
    const closeFriends = super.peopleInSameCountry(friends)
    const result = []
    for (const friend of closeFriends) {
      if (this.school === friend.school) {
        result.push(friend)
      }
    }
    return result
  }
}
