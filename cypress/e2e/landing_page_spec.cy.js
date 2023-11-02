describe('landing page', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${Cypress.env('REACT_APP_API_KEY')}`, {
      statusCode: 200,
      fixture: 'mock_articles'
    }).as('articles')
    cy.visit('http://localhost:3000')
  })
  it('should show a header, search bar, and multiple articles when the app loads', () => {
    cy.wait('@articles')
    cy.get('header').should('exist')
    .get('h1').should('contain', 'Top Headlines in Science')
    cy.get('.articles').should('have.length', '3')
    cy.get('.articles').first().within(() => {
      cy.get('img').should('have.attr', 'alt', 'Flying In Martian Sky, A NASA Chopper Made By An Indian - NDTV')
      .get('h2').should('contain', 'Flying In Martian Sky, A NASA Chopper Made By An Indian - NDTV')
      .get('p').first().should('contain', 'US space agency')
      .get('p').last().should('contain', '10/29/2023')
      .get('.see-more').should('have.text', 'See More')
    })
    cy.get('.articles').last().within(() => {
      cy.get('img').should('have.attr', 'alt', 'Massive ocean discovered beneath the Earth\'s crust containing more water than on the surface | indy100 - indy100')
      .get('h2').should('contain', 'Massive ocean discovered beneath the Earth\'s crust containing more water than on the surface | indy100 - indy100')
      .get('p').first().should('contain', 'It feels like')
      .get('p').last().should('contain', '10/29/2023')
      .get('.see-more').should('have.text', 'See More')
    })
    cy.get('.search-container').within(() => {
      cy.get('label').should('have.attr', 'for', 'search')
      .get('input').should('have.attr', 'id', 'search')
      .get('input').should('have.attr', 'type', 'text')
      .get('input').should('have.attr', 'placeholder', 'Search here...')
    })
    cy.get('input').type('humans').should('have.value', 'humans')
    cy.get('.articles').should('have.length', '1')
    .get('img').should('have.attr', 'alt', 'NASA Shatters Dreams & Admits Humans Will Never Go To Jupiter - Wccftech')
    .get('p').first().should('contain', 'NASA has suprised followers')
    .get('p').last().should('contain', '10/29/2023')
    .get('.see-more').should('have.text', 'See More')
    .get('.clear-search').click()
    cy.get('input').should('have.value', '')
  })
})