import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('el usuario navega a la página principal', () => {
  cy.visit('/');
});

Then('debería ver el logo en el header', () => {
  cy.get('header img[alt="Logo"]').should('be.visible');
});

Then('debería ver el enlace {string}', (texto) => {
  cy.get('header nav').contains('a', texto).should('be.visible');
});