import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Hero from "../Hero/Hero"
import Sub_navbar from "../sub_navbar/Sub_navbar"
import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  






  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Sidebar /> 
            <Navbar />
            <Hero />
            <Sub_navbar />
            <Home />

        </main>
      </BrowserRouter>
    </div>
  )
}
