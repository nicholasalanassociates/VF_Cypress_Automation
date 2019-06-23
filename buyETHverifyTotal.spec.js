//Tried a couple ways to try to debug this script using a combination of javascript, using the
// DOM however it seems that i'm getting a null value when trying to convert the value data of the 
// inputs.

describe("buyETHverifyTotal", () => {
		it('Proceed to https://www.binance.com/en/trade/ETH_BTC', () => {	
		// Usually can generate all the Bitcoin symbols from data 
		// source then generate the urls for the
		// landing page you would like to test.
			cy.visit('https://www.binance.com/en/trade/ETH_BTC')
			cy.get('#FormRow-BUY-quantity')
			 .type('100')
			 .type('{enter}')
			 .should('have.value', '100')
			
			//Here is where my issue is this is not returning the value of the attribute given the element
		    //Seems to be an issue getting the quanity value using this method unsure why?  It might be a hidden
		    //element in the DOM.
			cy.get('input[id=FormRow-BUY-quantity]').invoke('attr', 'value')
			cy.get('input[id=FormRow-BUY-price]').invoke('attr', 'value')
		
			//var price = document.getElementById("FormRow-BUY-price");
			
			//getAttibute is null?  Unsure why i'm getting 'null' because when I place this into the browser console it returns the correct value
			// document.getElementById("FormRow-BUY-price").getAttribute("value")
			//var priceValue = price.getAttribute("value");
			//var quantity = document.getElementById("FormRow-BUY-quantity");
			//var quantityValue = quantity.getAttribute("value");
			//var result = priceValue * quantityValue;
			
			//cy.log('MY Total:')
			//cy.log(myTotal)
			//cy.log('Buy Quantity:')
			//cy.log(parseFloat(cy.get('input[id=FormRow-BUY-quantity]').invoke('val')))
			//cy.log(parseFloat(cy.get('input[id=FormRow-BUY-price]').invoke('val')))
			cy.get('input[id=FormRow-BUY-total]').invoke('attr', 'value')
			//buyTotal.should('contain', myTotal)
			//var totalNow = document.getElementById('FormRow-BUY-total').getAttribute('value')
			//cy.expect(myTotal).to.equal(buyTotal)
		//console.log(myResult);
		//cy.get('#FormRow-BUY-total').contains(myResult)
    	})
  
    	
		//myResult = document.getElementById('FormRow-BUY-price').value * document.getElementById('FormRow-BUY-quantity').value;
		//console.log(myResult);
		//cy.get('#FormRow-BUY-total').contains(myResult)
		//expect(parsedTotal).to.equal(total)
		
})