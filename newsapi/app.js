let newsDiv = document.getElementById("newsDiv")

function populateNews() {
    let newsList = news.articles.map(newsItem => {

        let newsItemDiv = `<div class="NewsItem">
                                <img src='${newsItem.urlToImage ? newsItem.urlToImage:"image unavailable"}'></img>
                                <div class="newsDetails">
                                    <h5>${newsItem.title}</h5>
                                    <span>${newsItem.author ? newsItem.author: ""}</span>
                                    <p>${newsItem.description ? newsItem.description: ""}</p>
                                    <a href="${newsItem.url}">Link to full article</a>
                                    <p>${newsItem.publishedAt}</p>
                            </div>`
        return newsItemDiv
    })
    
    newsDiv.innerHTML = newsList.join('')
}
populateNews()


