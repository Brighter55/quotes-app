import add from "./assets/add.png"
import React, {useState} from "react"

function Header() {
    const [showForm, setShowForm] = useState(false);
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");


    async function handleSubmit(event) {
        event.preventDefault();
        const formData = {"quote": quote,
                    "author": author,
                    };
        try {
            const response = await fetch("http://localhost:5000/api/quotes", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });
        } catch (error) {
            console.error('Error:', error);
        }
        setShowForm(!showForm);
    }

    return (
        <header>
          <h1 style={{margin: 0, padding: "25px 0"}}>Quotes <img onClick={() => {setShowForm(!showForm)}} src={add} alt="add sign" style={{width: "19px", height: "19px"}}/></h1>
          {showForm && (
            <form onSubmit={handleSubmit} className="addForm">
                <label className="addFormItems">Quote: <input value={quote} onChange={(event) => {setQuote(event.target.value)}} style={{height: "100%"}} /></label>
                <label className="addFormItems">By: <input value={author} onChange={(event) => {setAuthor(event.target.value)}} style={{height: "100%"}} /></label>
                <input className="addFormItems" type="submit" value="add" style={{width: "100px", cursor: "pointer"}} />
            </form>
            )}
          <hr style={{height: "3px", backgroundColor: "#E7ECEF"}}></hr>


        </header>
    );
}

export default Header
