import React from 'react'
import { mount } from '@cypress/react'
import Order from './Order'

it('accepts input', () => {
    const input = "Jack"
    cy.get('#name-input').type(input).should('have.value', input)
})