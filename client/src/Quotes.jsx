import React, {useEffect, useState} from "react"


function Quotes() {
    const [quotes, setQuotes] = useState([]);
    // when app mounts, get list of qoutes from Flask
    useEffect(() => {
        fetch("http://localhost:5000/api/quotes", {method: "GET"})
        .then(response => response.json())
        .then(data => setQuotes(data))
        .catch(error => console.error("Fetching error: ", error));
    }, [])

    return (
        <div className="quotes">
            {quotes.length > 0 ? <h1>Quote: {quotes[0]["quote"]} and Author: {quotes[0]["author"]}</h1> : "no quote yet"}
        </div>
    );
}

export default Quotes
