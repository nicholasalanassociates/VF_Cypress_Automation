//Websocket example: Need to understand the way cypress manipulates data
//Can verify the properties are there but can not sample the data at this point.

it('Websocket Connect', () => {
	cy.visit('https://www.binance.com/en/trade/ETH_BTC')
	// assuming this sends us back
	// the campaign information
	
	// Attempted to get the duration = endTime - startTime 
	// var startTime = cy.clock() 
	//cy.log(cy.clock())
	
	cy.request('https://www.binance.com/api/v1/depth?limit=500&symbol=ETHBTC').as('binance')
	cy.get('@binance').should((response) => {
	expect(response.body).to.have.property('bids')
	expect(response.body).to.have.property('asks')
	expect(response).to.have.property('headers')
	expect(response).to.have.property('duration')
	})
	//endTime = cy.clock()
	//cy.tick(1000)
	//cy.log(cy.clock())
	// Can not get values in variables difficult the data that you need.
	// for debugging.
	//var duration = (endTime - startTime)
	//cy.log(duration)
})