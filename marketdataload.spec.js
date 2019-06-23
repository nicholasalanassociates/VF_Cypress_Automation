describe("marketdataload", () => {
	it('Proceed to ETH_BTC page and verify page contents', () => {	
		// Usually can generate all the Bitcoin symbols from data 
		// source then generate the urls for the
		// landing page you would like to test.
		cy.visit('https://www.binance.com/en')
		cy.wait(1000)
		cy.scrollTo(0,100)
		cy.get(':nth-child(2) > #symbol_list_row > [aria-colindex="2"]').scrollIntoView().should('be.visible').click()
		// Check to see Level II quotes are displaying
		
		cy.get('div.iakWCr')
		  .should('be.visible')
		// Chart container should be visible on the page.  
		cy.get('div.faSQzH')
		 .should('be.visible')
		//Check to see if the Limit Order / Market Order / Stop-Limit Order form is visible
		cy.get('div.ljKfOH')
		 .should('be.visible')
		 // Symbol search widgets are populated.
		cy.get('.ePLEEb')
		 .should('be.visible')
		 // Market Activity
		cy.get('.djPltW')
		 .should('be.visible')
		 //Trade History
		cy.get('.sc-62mpio-0-sc-fYxtnH > :nth-child(3)')
		 .should('be.visible')
	})
	
})