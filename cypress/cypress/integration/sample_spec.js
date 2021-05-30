const { IsJWT } = require('class-validator')

describe('First test', () => {
  it('compares 1 === 1', () => {
    expect(1).to.equal(1)
  })

  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email')
      .type('foo@bar.co.jp')
      .should('have.value', 'foo@bar.co.jp')
  })
})
