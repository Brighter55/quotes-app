import Quotes from "./Quotes.jsx"
import Header from "./Header.jsx"
import React, {useState} from "react"


function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);


  return (
      <>
      <Header className="header" setRefreshTrigger={setRefreshTrigger}></Header>
      <div className="content">
        <div className="container">
          <Quotes refreshTrigger={refreshTrigger} setRefreshTrigger={setRefreshTrigger} ></Quotes>
        </div>
      </div>
      </>
  );
}

export default App
