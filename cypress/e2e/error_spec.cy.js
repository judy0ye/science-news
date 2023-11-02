describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${Cypress.env('REACT_APP_API_KEY')}`, {
      statusCode: 200,
      fixture: 'mock_articles'
    }).as('articles')
  })
  it('should show an error handling page given a misspelled URL', () => {
    cy.visit('http://localhost:3000/deta')
    cy.get('h2').should('contain', 'Oops, Nothing to see here!')
    .get('.error-img').should('have.attr', 'src')
    .and('include', 'cat')
    .get('.home').click()
    cy.wait('@articles')
    cy.url().should('eq', 'http://localhost:3000/')
  })
  it('should show an error handling page given a misspelled dynamic value path', () => {
    cy.visit('http://localhost:3000/details/gibberish')
    cy.get('h2').should('contain', 'Oops, Nothing to see here!')
    .get('.error-img').should('have.attr', 'src')
    .and('include', 'cat')
    .get('.home').click()
    cy.wait('@articles')
    cy.url().should('eq', 'http://localhost:3000/')
  })
  it('should show a 500 level error if ther server is down', () => {
    cy.intercept('GET', `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${Cypress.env('REACT_APP_API_KEY')}`, {
      statusCode: 500,
    }).as('500Error')
    cy.visit('http://localhost:3000/')
    cy.wait('@500Error')
    cy.get('h2').should('contain', '500: Failed to fetch headlines: Something went wrong')
    .get('.error-img').should('have.attr', 'src')
    .and('include', 'cat')
  })
  it('should show a 404 level error if no article is found', () => {
    cy.intercept('GET', `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${Cypress.env('REACT_APP_API_KEY')}`, {
      statusCode: 404,
    }).as('404Error')
    cy.visit('http://localhost:3000/details/gibberish')
    cy.wait('@404Error')
    cy.get('h2').should('contain', '404: Failed to fetch headlines: Something went wrong')
    .get('.error-img').should('have.attr', 'src')
    .and('include', 'cat')
    .get('.home').click()
    cy.intercept('GET', `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${Cypress.env('REACT_APP_API_KEY')}`, {
      statusCode: 200,
      fixture: 'mock_articles'
    })
    cy.visit('http://localhost:3000/')
    cy.url().should('eq', 'http://localhost:3000/')
  })
})