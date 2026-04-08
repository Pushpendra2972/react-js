import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'


// const myobj = (
   
//     <a href="https://google.com" target="_blank"> visit google </a>
// )


// const myElement  = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }



const reactElement = React.createElement(
  'a',
  { href: "https://google.com", target: "_blank" },
  "click me to visit google"
)


createRoot(document.getElementById('root')).render(
  
    // <App/>
    // App()

    // myobj

    // myElement  //  won't run bcoz render have some predefined syntax 

    reactElement
  
)
