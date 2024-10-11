import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>custom app !</h1>
    </div>
  )
}

/*const ReactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'click me to visit google'
}*/



const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai aur react";

// creating react element according to react
const reactElement = React.createElement(
  // here the syntax is predefined for creating element 
  'a',             //tag
  {href: 'https://google.com' , target: '_blank' },   //object
  'click me to visit google',
  anotherElement
)


ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
