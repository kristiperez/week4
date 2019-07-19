let tickerTextBox = document.getElementById("tickerTextBox")
let getQuoteBtn = document.getElementById("getQuoteBtn")
let stockPriceDiv = document.getElementById("stockPriceDiv")

getQuoteBtn.addEventListener('click',function() {

    let tickerSymbol = tickerTextBox.value 

    window.setInterval(() => {

        let stock =  getStockQuote(tickerSymbol)
        let stockDiv = `<div class="stockDetails">
                        <h1>Ticker: ${tickerSymbol}<h1>
                        <h2>${stock.name}<h2>
                        <p>${stock.price}<p>
                        </div>`

        stockPriceDiv.innerHTML = stockDiv

    },2000)


})

