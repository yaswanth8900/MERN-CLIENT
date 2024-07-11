// cypress/e2e/register.cy.js
describe('Register Page', () => {
    beforeEach(() => {
      // Load the user fixture data before each test
      cy.fixture('user').then((user) => {
        // Use the fixture data to set the initial form state
        cy.wrap(user).as('userData');
      });
    });
  
    it('should register a user successfully', function() {
      cy.intercept('POST', 'http://localhost:3001/users/register', {
        statusCode: 200,
        body: {
          message: 'User registered successfully'
        }
      }).as('registerRequest');
  
      cy.visit('/register');
  
      // Fill out the form using fixture data
      cy.get('input[name="name"]').type(this.userData.name);
      cy.get('input[name="email"]').type(this.userData.email);
      cy.get('input[name="password"]').type(this.userData.password);
  
      cy.get('button[type="submit"]').click({ multiple: true });
  
      cy.wait('@registerRequest').then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
        expect(interception.response.body.message).to.equal('User registered successfully');
      });
  
      cy.contains('User Registered Successfully !').should('be.visible');
    });
  });
  