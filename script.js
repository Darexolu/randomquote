const quotes = ["Success is not final,failure is not fatal: it is the courage to continue that counts. - Winston Churchill","Believe you can and you're halfway there. - Theodore Roosevelt","Happiness is not something ready made. It comes from your own actions. - Dalai Lama","Try to be a rainbow in someone's cloud. - Maya Angelou","I have not failed.I've just found 10,000 ways that won't work. - Thomas A.Edison"];

let quoteBtn = document.getElementById('quote-btn');
let container = document.getElementById('quote-container');
quoteBtn.addEventListener("click", generateQuote);
function generateQuote(){
    let randomQuotes = Math.floor(Math.random() * (quotes.length));
    container.innerHTML  = quotes[randomQuotes];
}
setInterval(generateQuote, 15000);