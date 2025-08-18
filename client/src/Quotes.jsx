import React, {useEffect, useState} from "react"


function Quotes() {
    const [quotes, setQuotes] = useState([]);
    // when app mounts, get list of qoutes from Flask
    useEffect(() => {
        fetch("http://localhost:5000/api/quotes", {method: "GET"})
        .then(response => response.json())
        .then(data => setQuotes(data))
        .catch(error => console.error("Fetching error: ", error));
    });

    return (
        <div className="quotes">
            {quotes.map((quote) => (
                                <div className="quote" key={quote.id}>
                                    <h3>{quote.quote}</h3>
                                    <h4>By {quote.author}</h4>
                                </div>
        ))}
        </div>
    );
}

export default Quotes
