import React, { Component } from 'react'

export type NavbarProps = {
  icon?: string,
  title?: string
}

export class Navbar extends Component<NavbarProps> {
  static defaultProps = {
    title: 'Finder',
    icon: 'fab fa-github'
  }

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    )
  }
}

export default Navbar
