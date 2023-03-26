import React, { Component } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Layout from './Layout/Layout'
import Protfolio from './Protfolio/Protfolio'

export default class App extends Component {
  render() {
    let Links = createBrowserRouter([
        {path:"",element:<Layout/>,children:[
          {path:"",element:<Home/>},
          {path:"home",element:<Home/>},
          {path:"protfolio",element:<Protfolio/>},
          {path:"about",element:<About/>},
          {path:"contact",element:<Contact/>},
          {path:"*",element:<Home/>},
        ]},
        
    ])
    return (
      <div>
        <RouterProvider router={Links}/>
      </div>
    )
  }
}
