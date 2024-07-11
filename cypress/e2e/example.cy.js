// cypress/e2e/example.cy.js
describe('Example Test Suite', () => {
  before(() => {
    // Runs once before all tests in the block
    cy.visit('/')
  });

  beforeEach(() => {
    // Runs before each test in the block
    // Clear the input field and reset the greeting message

    cy.get('input[name="search"]').type('Cypress')
    cy.get('input[name="search"]').clear();
    cy.get('button[type="submit"]').click();
  });

  it('should load the home page and interact with elements', () => {
    // Check if the header contains specific text
    cy.get('h1').should('contain', 'Welcome to the Home Page')

    // Check if the input field is visible
    cy.get('input[name="search"]').should('be.visible')

    // Type into the input field
    cy.get('input[name="search"]').type('Cypress')

    // Check if the input field has the correct value
    cy.get('input[name="search"]').should('have.value', 'Cypress')

    // Click the greet button
    cy.get('button[type="submit"]').click()
  });

  afterEach(() => {
    cy.get('input[name="search"]').clear();
    cy.get('button[type="submit"]').click();
    cy.log('Reset input field and button state after test');
  });

  after(() => {
    cy.log('All tests in the suite have completed');
  });
});
