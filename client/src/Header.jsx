import add from "./assets/add.png"

function Header() {
    function handleAddQuote() {
        return (
            <form action="/getQuote">
                <label For="quote">Your qoute</label>
                <input id="quote"/>
                <label For="source">By</label>
                <input id="source"/>
                <button>Add</button>
            </form>
        );
    }


    return (
        <header>
          <h1>Quotes <img onClick={handleAddQuote} src={add} alt="add sign" style={{width: "19px", height: "19px"}}/></h1>
          <hr style={{height: "3px", backgroundColor: "grey"}}></hr>
        </header>
    );
}

export default Header
