describe('Index Page', () => {
  // before each test, visit the base url
  beforeEach(() => {
    cy.server()
    cy.visit('/')
  })

  // Test header on main page
  it('Header contains main page info', () => {
    cy.get('h1').contains("Welcome to the World's Easiest Online-Shop Builder")
  })

  // Test div for 2 buttons
  it('Contains auth buttons', () => {
    // there should be 2 buttons
    cy.get('div > a').should('have.length', 1)
    cy.get('div > button').should('have.length', 1)

    // One button should have start
    cy.get('div > [title="Start!"]').contains('Start!')
    // the other should have Sign In
    cy.get('div > button').contains('Sign In')
  })

  it('Opens auth modal and closes', () => {
    // clicks 'sign in button'
    cy.get('div > button').click()
    // check for the modal container on screen
    cy.get('.AuthModal__ModalContainer-sc-11eqpdc-0').should('be.visible')
    // click the X button
    cy.get('#auth-modal-x').click()
    // check the modal container is not visible
    cy.get('.AuthModal__ModalContainer-sc-11eqpdc-0').should('not.be.visible')
  })

  it('opens auth modal and check for components based on auth type', () => {
    // click the sign in button inside div
    cy.get('div > button').click()
    // get the first button and check css for background color as it should be active
    cy.get('.AuthModal__TabBar-sc-11eqpdc-2 > li')
      .first()
      .should('have.css', 'background-color', 'rgb(130, 218, 255)')
    // from there, check for the following values on screen
    cy.get('#underform-values').contains('Remember Me')
    cy.get('#underform-values').contains('Forgot Password')

    // now, we'll switch tabs to the 'sign up' button
    cy.get('.AuthModal__TabBar-sc-11eqpdc-2 > li').eq(1).click()
    // now, we'll check 'activeness' by seeing the background color
    cy.get('.AuthModal__TabBar-sc-11eqpdc-2 > li')
      .eq(1)
      .should('have.css', 'background-color', 'rgb(130, 218, 255)')
  })

  // Submits login form
  it('Submits a login', () => {
    // opens the modal
    cy.get('div > button').click()
    // grabs the first input field and enter crendential
    cy.get(
      '#__next > :nth-child(1) > .AuthModal__Modal-sc-11eqpdc-1 > .Form-u4p01-0 > :nth-child(1) > .MainInputs__Input-sc-1hnwefb-2'
    ).type('admin')
    // grab the second input and enter credential
    cy.get(
      '#__next > :nth-child(1) > .AuthModal__Modal-sc-11eqpdc-1 > .Form-u4p01-0 > :nth-child(2) > .MainInputs__Input-sc-1hnwefb-2'
    ).type('password')
    // set up route monitoring
    cy.route({
      url: '/auth/**',
      method: 'POST',
    }).as('login')
    // click on the submit button
    cy.get('#auth-submit').click()

    // await the response and expect the status to equal 200
    cy.wait('@login').then((data) => {
      assert.equal(200, data.status)
    })
  })

  // submits a register
  it('Registers a user', () => {
    // generate a random string for registration
    function randomString() {
      return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
      )
    }
    // open the modal
    cy.get('div > button').click()
    // change to the second tab (registration)
    cy.get('.AuthModal__TabBar-sc-11eqpdc-2 > li').eq(1).click()

    // grab the first input field and type the random string
    cy.get(
      '#__next > :nth-child(1) > .AuthModal__Modal-sc-11eqpdc-1 > .Form-u4p01-0 > :nth-child(1) > .MainInputs__Input-sc-1hnwefb-2'
    ).type(randomString())
    // grab the second input field and type the random string
    cy.get(
      '#__next > :nth-child(1) > .AuthModal__Modal-sc-11eqpdc-1 > .Form-u4p01-0 > :nth-child(2) > .MainInputs__Input-sc-1hnwefb-2'
    ).type(randomString())

    // set up monitoring for the registration route
    cy.route({
      url: '/auth/**',
      method: 'POST',
    }).as('register')

    // click the submit button on the page
    cy.get('#auth-submit').click()

    // await the regsitration response and check the status to equal 201
    cy.wait('@register').then((data) => {
      assert.equal(201, data.status)
    })
  })

  // Check for list of items
  it('Have list of benefits', () => {
    const listData = [
      'Easiest Drag and Drop',
      'Create Products & Auto-shipment',
      'Built in Paypal & Credit Card Options',
      'Automatically Share to Social Media',
      "It's Free for Life!",
    ]

    // Ensure page displays 5 items
    cy.get('ul > li').should('have.length', listData.length)

    // Ensure the page contains the above items listed
    listData.map((li) => {
      cy.get('ul > li').contains(li)
    })
  })
})
