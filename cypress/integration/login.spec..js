
describe('LOGIN PAGE', () => {
   
    describe( 'Check the elements of the Login Page', ()=>{

        before(() => {
            cy.visit('/login');
        });

        it('Login Page elements are present ', () =>{
            cy.get('h2').should('be.visible');
            cy.get('.subheader').should('be.visible');
            cy.get('[for="username"]').should('be.visible');
            cy.get('#username').should('be.visible');
            cy.get('[for="password"]').should('be.visible');
            cy.get('#password').should('be.visible');
            cy.get('.radius').should('be.visible');
            cy.get('[alt="Fork me on GitHub"]').should('be.visible');
            cy.get('.large-4').should('be.visible');
        });

        it('Login Page elements have correct values', () =>{
            cy.get('h2').should('have.text', 'Login Page');
            cy.get('.subheader').should('include.text', 'This is where you can log into the secure area.');
            cy.get('[for="username"]').should('have.text', 'Username');
            cy.get('[for="password"]').should('have.text', 'Password');
            cy.get('.radius').should('have.text', ' Login');
            cy.get('[alt="Fork me on GitHub"]').should('have.attr', 'src', '/img/forkme_right_green_007200.png');
            cy.get('.large-4').should('include.text', 'Powered by Elemental Selenium');
       });
    })
    
    describe('Functional Test fo Login Page', ()=>{
        
        beforeEach(() => {
            cy.visit('/login');
        });

        describe('Positive functionality', () => {

            it('Login with Username and Password', () =>{
                cy.get('#username').type('tomsmith');
                cy.get('#password').type('SuperSecretPassword!');
                cy.get('.radius').click();
                cy.url().should('include', '/secure');
            });

        });
        
        describe('Negative functionality', () =>{

            it('Login with empty input fields', () => {
                cy.get('.radius').click();
                cy.get('.error').should( 'include.text', 'Your username is invalid!');
            });

            it('Login with Username only', () => {
                cy.get('#username').type("tomsmith");
                cy.get('.radius').click();
                cy.get('.error').should( 'include.text', 'Your password is invalid!');
            });

            it('Login with Password only', () => {
                cy.get('#password').type("SuperSecretPassword!");
                cy.get('.radius').click();
                cy.get('.error').should( 'include.text', 'Your username is invalid!');
            });

            it('Login with invalid Username only', () => {
                cy.get('#username').type("Tom Smith");
                cy.get('.radius').click();
                cy.get('.error').should( 'include.text', 'Your username is invalid!');
            });

            it('Login with invalid Password only', () => {
                cy.get('#password').type("Super_Secret_Password!123");
                cy.get('.radius').click();
                cy.get('.error').should( 'include.text', 'Your username is invalid!');
            });

            it('Login with invalid Username and Password', () => {
                cy.get('#username').type("Tom Smith");
                cy.get('#password').type("Super_Secret_Password!123");
                cy.get('.radius').click();
                cy.get('.error').should( 'include.text', 'Your username is invalid!');
            });
        })
    })
})


