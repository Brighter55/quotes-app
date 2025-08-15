import React, {useEffect, useState} from "react"


function Quotes() {
    const [quotes, setQuotes] = useState({});
    // when app mounts, get list of qoutes from Flask
    useEffect(() => {
        fetch("http://localhost:5000/api/quotes", {method: "GET"});
        .then(response => response.json())
        .then(data => setQuotes(data.qoutes))
        .catch(error => console.error("Fetching error: ", error));
    }, []);

    return (
        <h2>Quote1</h2> // placeholder
    );
}

export default Quotes
