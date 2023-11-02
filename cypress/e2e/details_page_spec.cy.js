describe('DetailedArticles page', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${Cypress.env('REACT_APP_API_KEY')}`, {
      statusCode: 200,
      fixture: 'mock_articles'
    }).as('articles')
    cy.visit('http://localhost:3000')
  })
  it('should route user to the detailed articles page on button click', () => {
    cy.wait('@articles')
    cy.get(':nth-child(5) > .details > .see-more').click()
    cy.url().should('eq', "http://localhost:3000/details/Massive%20ocean%20discovered%20beneath%20the%20Earth's%20crust%20containing%20more%20water%20than%20on%20the%20surface%20%7C%20indy100%20-%20indy100")
    cy.get('article').within(() => {
      cy.get('h2').should('contain', 'Massive ocean discovered beneath the Earth\'s crust containing more water than on the surface | indy100 - indy100')
      .get('.detailed-article > :nth-child(2)').should('contain', 'Published: 10/29/2023')
      .get('.detailed-article > :nth-child(3)').should('contain', 'By: Harry Fletcher')
      .get('.detailed-article-image').should('have.attr', 'alt','Massive ocean discovered beneath the Earth\'s crust containing more water than on the surface | indy100 - indy100')
      .get('.detailed-article > :nth-child(5)').should('contain', 'It feels like there have been staggering')
      .get('.detailed-article > :nth-child(6)').should('contain', 'Source: indy100')
      .get('.outside-source').should('have.attr', 'target', '_blank')
    })
  })
  it('should be able to go back to landing page on click of back button', () => {
    cy.wait('@articles')
    cy.get(':nth-child(5) > .details > .see-more').click()
    cy.get('.back').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})