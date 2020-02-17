import { User, UserProps } from "../models/User"
import { View } from "./View"

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-name': this.onSetNameClick,
      'click:.set-age': this.onSetAgeClick
    }
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input')
    if (input) {
      const newName = input.value
      this.model.set({ name: newName })
    }
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  template(): string {
    return `
      <div>
        <h1>UserForm</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `
  }
}
