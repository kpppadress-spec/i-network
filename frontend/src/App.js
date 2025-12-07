import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/Home";
import OfficeSpace from "./pages/OfficeSpace";
import Coworking from "./pages/Coworking";
import VirtualOffices from "./pages/VirtualOffices";
import MeetingRooms from "./pages/MeetingRooms";
import Membership from "./pages/Membership";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import HybridWorking from "./pages/HybridWorking";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/office-space" element={<OfficeSpace />} />
          <Route path="/coworking" element={<Coworking />} />
          <Route path="/virtual-offices" element={<VirtualOffices />} />
          <Route path="/meeting-rooms" element={<MeetingRooms />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:city" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hybrid-working" element={<HybridWorking />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
