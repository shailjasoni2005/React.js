import React from "./react"
function App() {
  const username = "react code."

  return (
    <>   {/*<- this is fragment "(<>)" */}
    <React/>
    <h1>react with vite with {username}</h1>
    {/* this username is evaluated expression and here we always write evaluated expression that has been evaluated from js already. */}
    </>
  ) 
}

export default App
