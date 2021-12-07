const express = require('express');

const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors());

app.get('/quote', async (req, res) => {
    let quotes = []
    for (let i=0; i<4; i++) {
        let quote = {};
        // the key doesn't determine the quote that is chosen per se, but it does prompt the loading of a new random quote
        let index = Math.floor(1000000-Math.random()*100000);
        let quoteBody = await axios.post(`http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&key=${index}`);
        // some quotes are formatted incorrectly or have no author, so those are rejected
        while(typeof quoteBody.data === "string" || quoteBody.data.quoteAuthor === "") {
            quoteBody = await axios.post(`http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&key=${index}`);
        }
        quote.text = quoteBody.data.quoteText;
        quote.author = quoteBody.data.quoteAuthor;
        quote.key = index;
        quotes.push(quote);

    }
    res.json({quotes});
})


const port = 3002;
app.listen(port, console.log(`listening at port ${port}`));    