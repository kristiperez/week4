let tickerTextBox = document.getElementById("tickerTextBox")
let getQuoteBtn = document.getElementById("getQuoteBtn")
let stockPriceDiv = document.getElementById("stockPriceDiv")

getQuoteBtn.addEventListener('click',function() {

    let tickerSymbol = tickerTextBox.value 

    window.setInterval(() => {

        let stock =  getStockQuote(tickerSymbol)
        let stockDiv = `<div class="stockDetails">
                        <h2>Ticker: ${tickerSymbol}<h2>
                        <h3>${stock.name}<h3>
                        <p>${stock.price}<p>
                        </div>`

        stockPriceDiv.innerHTML = stockDiv

    },2000)


})

