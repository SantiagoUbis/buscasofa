import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('el usuario navega a la página de registro', () => {
  cy.visit('/registro');
});

When('completa el formulario de registro con datos válidos', () => {
  cy.get('input[name="username"]').type('Usuario Prueba');
  cy.get('input[name="email"]').type('usuario@prueba.com');
  cy.get('input[name="password"]').type('Password123!');
});

When('envía el formulario de registro', () => {
  cy.get('form').submit();
});

Then('ve un mensaje de confirmación de registro', () => {
  cy.contains('Registro exitoso').should('be.visible');
});

Given('el usuario navega a la página de login', () => {
  cy.visit('/login');
});

When('completa el formulario de login con credenciales válidas', () => {
  cy.get('input[name="email"]').type('usuario@prueba.com');
  cy.get('input[name="password"]').type('Password123!');
});

When('envía el formulario de login', () => {
  cy.get('form').submit();
});

Then('ve un mensaje de bienvenida', () => {
  cy.contains('Bienvenido').should('be.visible');
});