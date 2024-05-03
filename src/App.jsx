import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Gigs from "./pages/gigs/Gigs"
import Gig from "./pages/gig/Gig"
import Add from "./pages/add/Add"
import Login from "./pages/login/Login"
import Messages from "./pages/messages/Messages"
import Message from  "./pages/message/Message"
import MyGigs from "./pages/myGigs/MyGigs"
import Orders from "./pages/orders/Orders"
import Register from "./pages/register/Register"
import "./App.scss"

function App() {
  

  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element= {<Home/>}></Route>
          <Route path="/gigs" element= {<Gigs/>}></Route>
          <Route path="/gig/:id" element= {<Gig/>}></Route>
          <Route path="/orders" element= {<Orders/>}></Route>
          <Route path="/mygigs" element= {<MyGigs/>}></Route>
          <Route path="/add" element= {<Add/>}></Route>
          <Route path="/messages" element= {<Messages/>}></Route>
          <Route path="/message" element= {<Message/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
