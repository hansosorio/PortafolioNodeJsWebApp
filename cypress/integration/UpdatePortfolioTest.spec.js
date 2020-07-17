describe('TestUpdate', () => {

  let endpoint = 'https://bo21t0ju3b.execute-api.us-east-1.amazonaws.com/prod/portfolios/6?'

  it('UpdatePortfolio', () => {

    cy.visit({
      url: endpoint,
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: {
        "idportfolio": "500",
        "username": "udemy_es",
        "description": "#SéCapaz de enseñar y aprender lo que siempre has querido. ¿Necesitas ayuda? Escríbenos a @udemysupport",
        "user_twitter": "udemy_es",
        "image_url": "https://pbs.twimg.com/profile_images/923671284013076480/__kptDp3_400x400.jpg"
      }
    })
  })
})
