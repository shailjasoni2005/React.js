import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl">

          <button
          onClick={() => setColor("darkred")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "darkred"}}>Dark-red</button>

          <button
          onClick={() => setColor("darkgreen")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "darkgreen"}}>Dark-Green</button>

          <button 
          onClick={() => setColor("darkblue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "darkblue"}}>Dark-Blue</button>

          <button 
          onClick={() => setColor("#8B8000")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#8B8000"}}>Golden</button>

          <button 
          onClick={() => setColor("indigo")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "indigo"}}>Indigo</button>

          <button 
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}>Black</button>
          <button 
          onClick={() => setColor("gainsboro")}
          className="outline-none px-4 py-1 rounded-full text-black font-bold shadow-lg"
          style={{backgroundColor: "gainsboro"}}>White</button>
        </div>
      </div>
    </div>
  )
}

export default App
