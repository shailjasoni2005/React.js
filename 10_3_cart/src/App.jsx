import './App.css'
import Item from './components/Item'
import Cart from './components/cart'

function App() {

  return (
   <>
   <div className='App'>
    <Item name="Mackbook Pro" price={100000}/>
    <Item name="Pendrive" price={4000}/>
    <Item name="Mobile" price={35000}/>
    <Cart/>
   </div>
   </>
  )
}

export default App
