/* eslint-disable no-undef */
describe('Hero Section', () => {
    beforeEach(() => cy.visit('/'))

    it('renders hero text', () => {
        cy.getByData('hero-text-1').should('exist').should('have.text', 'Are we there yet?')
        cy.getByData("hero-text-2")
          .should("exist")
          .should("have.text", "GET LOST (but like, on purpose)");
    })

    it('shows the Plan Trip button', () => {
        cy.getByData('plan-trip-button').should('exist').should('have.text', 'Plan Trip')
    })

})

describe('Anti-Grid Manifesto', () => {
    beforeEach(() => cy.visit('/'))

    it('displays Manifesto section', () => {
        cy.getByData('manifesto-title').should('exist').should('have.text', 'The Anti-Grid Manifesto.')
        cy.getByData('manifesto-item-1').should('exist').should('have.text', '01. MOST APPS ARE ROBOTS.')
        cy.getByData('manifesto-item-2').should('exist').should('have.text', '02. THE PACK IS REAL.')
    })
})

describe('Tools for Drift', () => {
    beforeEach(() => cy.visit('/'))

    it('shows Route Painter tool', () => {
        cy.getByData('feature-title-1').should('exist').should('have.text', 'Route Painter')
    })

    it('shows Pack Planning tool', () => {
        cy.getByData('feature-title-2').should('exist').should('have.text', 'Pack Planning')
    })
})


describe('Testimonials', () => {
    beforeEach(() => cy.visit('/'))

    it('shows Sarah_J testimonial', () => {
        cy.getByData('social-proof-item-1').should('exist').should('have.text', 'RECEIPT #0492 // USER: SARAH_J')
        cy.getByData('social-proof-item-2').should('exist').should('have.text', 'Finally, an app that understands I want to stop for weird roadside attractions, not just gas stations.')
    })

    it('shows Nomad_Mike testimonial', () => {
        cy.getByData('social-proof-item-3').should('exist').should('have.text', '@Nomad_Mike')
    })
})