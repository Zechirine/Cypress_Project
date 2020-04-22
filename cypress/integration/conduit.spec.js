describe('The conduit application', () => {
/*    it('Show some posts', () => {
        cy.visit('/')
        cy.get('.article-preview').should('have.length', 10)
        cy.request('https://conduit.productionready.io/api/articles?limit=10&offset=0').then((response) => {
            cy.writeFile('cypress/fixtures/posts.json', response.body)
        })
    })*/

    it('shows some posts', () => {
        cy.visit('/')
        cy.get('.article-preview').should('have.length', 10)
      })
    
    it('shows the first post', () => {
        cy.server()
        // we set the response to be the activites.json fixture
        cy.route('GET', '/api/articles*', 'fixture:posts.json')
        cy.visit('/')
        cy.get(':nth-child(1) > .article-preview').contains('Gizmo')
    })

    it('should handle an empty database', () => {
        cy.server()
        // we set the response to be the activites.json fixture
        cy.route('GET', '/api/articles*', 'fixture:no_posts.json')
        cy.visit('/')
        cy.contains('No articles are here... yet.')
      })
})