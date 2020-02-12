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
    cy.get('div > a').should('have.length', 2);

    // One button should have start
    cy.get('div > [title="Start!"]').contains('Start!');
    // the other should have Sign In
    cy.get('div > [title="Sign In"]').contains('Sign In');
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
