import React, {useEffect, useState} from "react"
import xMark from "./assets/X-mark.png"

function Quotes() {
    const [quotes, setQuotes] = useState([]);
    // when app mounts, get list of qoutes from Flask
    useEffect(() => {
        fetch("http://localhost:5000/api/quotes", {method: "GET"})
        .then(response => response.json())
        .then(data => setQuotes(data))
        .catch(error => console.error("Fetching error: ", error));
    });

    async function handleXClicked(event, user_id) {
        try {
            await fetch("http://localhost:5000/api/remove", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"id": user_id})
        });
        } catch (error) {
            console.error('Error:', error);
        }

    }

    return (
        <div className="quotes">
            {quotes.map((quote) => (
                                <div className="quote" key={quote.id}>
                                    <div className="X-mark-container">
                                        <img onClick={() => handleXClicked(event, quote.id)} src={xMark} className="X-mark"/>
                                    </div>
                                    <h3>{quote.quote}</h3>
                                    <h4>By {quote.author}</h4>
                                </div>
        ))}
        </div>
    );
}

export default Quotes
