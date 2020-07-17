describe('TestGetAll', () => {

  let endpoint = 'https://bo21t0ju3b.execute-api.us-east-1.amazonaws.com/prod/portfolios/'
  const getItems = () =>
    cy.request(endpoint)
      .its('body')


  it('returns id + portfolio objects', () => {


    cy.visit(endpoint, {
      headers: {
        "Content-Type": 'application/json',
      }
    })

    console.log(getItems())
    /*getItems()
      .each(value =>
        expect(value).to.have.all.keys('idportfolio', 'username')
      )*/
  })
})