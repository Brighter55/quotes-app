import Quotes from "./Quotes.jsx"
import Header from "./Header.jsx"

function App() {
  return (
      <>
      <Header className="header"></Header>
      <div className="content">
        <div className="container">
          <Quotes></Quotes>
        </div>
      </div>
      </>
  );
}

export default App
