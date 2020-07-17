describe('TestH1', () => {
  it('TestH1', () => {
    cy.visit('http://localhost:3001/portfolio/1')
    cy.get('h1')               // 9.
      .should('contain', 'NairoQuinCo')
  })
})