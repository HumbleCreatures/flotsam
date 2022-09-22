import { getElementByTestId } from '../support/app.po';

describe('login form', () => {
  beforeEach(() => {
    cy.intercept("https://catfact.ninja/fact", { fixture: "catfact" });

    cy.visit('/')}
  );

  it('should display login message after submitting form', () => {
    // Custom command example, see `../support/commands.ts` file

    getElementByTestId('username').type("jonatan");
    getElementByTestId('password').type("hemligt");
    getElementByTestId('login-form-button').click();
    getElementByTestId('login-form-message').should('have.text', 'En katt är grön');
    
    // Function helper example, see `../support/app.po.ts` file
    //getGreeting().contains('Welcome flotsam-web');
  });
});
