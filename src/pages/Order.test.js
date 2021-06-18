import React from 'react'
import { mount } from '@cypress/react'
import Order from './Order'

it('accepts input', () => {
    mount(<Order />)    
    // eslint-disable-next-line no-undef
    cy.get('#name-input').type("name input")
    // eslint-disable-next-line no-undef
    cy.get('#address-input').type("address input")
    // eslint-disable-next-line no-undef
    cy.get('#special-text').type("special input")    
})

it('multiple select', () => {    
    mount(<Order />)        
    // eslint-disable-next-line no-undef
    cy.get('input[value="pepperoni"]').uncheck().should('not.be.checked')
    // eslint-disable-next-line no-undef
    cy.get('input[value="sausage"]').uncheck().should('not.be.checked')
    // eslint-disable-next-line no-undef
    cy.get('input[value="bacon"]').uncheck().should('not.be.checked')    
})

it('submit form', () => {
    mount(<Order />)
    // eslint-disable-next-line no-undef
    cy.get('#name-input').type("name input")
    // eslint-disable-next-line no-undef
    cy.get('select').select('Large')
    // eslint-disable-next-line no-undef
    cy.get('form').submit()
})