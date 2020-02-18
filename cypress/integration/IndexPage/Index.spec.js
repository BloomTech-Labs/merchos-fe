describe('Index Page', () => {
  // before each test, visit the base url
  beforeEach(() => {
    cy.visit('/');
  });

  // Test header on main page
  it('Header contains main page info', () => {
    cy.get('h1').contains("Welcome to the World's Easiest Online-Shop Builder");
  });

  // Test div for 2 buttons
  it('Contains auth buttons', () => {
    // there should be 2 buttons
    cy.get('div > a').should('have.length', 1);
    cy.get('div > button').should('have.length', 1);

    // One button should have start
    cy.get('div > [title="Start!"]').contains('Start!');
    // the other should have Sign In
    cy.get('div > button').contains('Sign In');
  });

  it('Opens auth modal and closes', () => {
    // clicks 'sign in button'
    cy.get('div > button').click();
    // check for the modal container on screen
    cy.get('.AuthModal__ModalContainer-sc-11eqpdc-0').should('be.visible');
    // click the X button
    cy.get('.AuthModal__XButton-sc-11eqpdc-3').click();
    // check the modal container is not visible
    cy.get('.AuthModal__ModalContainer-sc-11eqpdc-0').should('not.be.visible');
  });

  it('opens auth modal and check for components based on auth type', () => {
    // click the sign in button inside div
    cy.get('div > button').click();
    // get the first button and check css for background color as it should be active
    cy.get('.AuthModal__TabBar-sc-11eqpdc-2 > li')
      .first()
      .should('have.css', 'background-color', 'rgb(130, 218, 255)');
    // from there, check for the following values on screen
    cy.get('.UnderForm__SignInValues-r5yma5-0').contains('Remember Me');
    cy.get('.UnderForm__SignInValues-r5yma5-0').contains('Forgot Password');

    // now, we'll switch tabs to the 'sign up' button
    cy.get('.AuthModal__TabBar-sc-11eqpdc-2 > li')
      .eq(1)
      .click();
    // now, we'll check 'activeness' by seeing the background color
    cy.get('.AuthModal__TabBar-sc-11eqpdc-2 > li')
      .eq(1)
      .should('have.css', 'background-color', 'rgb(130, 218, 255)');
    // then check that the signup form does not have the login related items
    cy.get('.UnderForm__SignInValues-r5yma5-0').should('not.exist');
  });

  // Check for list of items
  it('Have list of benefits', () => {
    const listData = [
      'Easiest Drag and Drop',
      'Create Products & Auto-shipment',
      'Built in Paypal & Credit Card Options',
      'Automatically Share to Social Media',
      "It's Free for Life!"
    ];

    // Ensure page displays 5 items
    cy.get('ul > li').should('have.length', listData.length);

    // Ensure the page contains the above items listed
    listData.map(li => {
      cy.get('ul > li').contains(li);
    });
  });
});
