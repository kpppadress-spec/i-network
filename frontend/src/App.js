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
import LocationCity from "./pages/LocationCity";
import Contact from "./pages/Contact";
import HybridWorking from "./pages/HybridWorking";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import HelpCenter from "./pages/HelpCenter";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import CookiePolicy from "./pages/CookiePolicy";
import Sitemap from "./pages/Sitemap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Solutions */}
          <Route path="/office-space" element={<OfficeSpace />} />
          <Route path="/coworking" element={<Coworking />} />
          <Route path="/virtual-offices" element={<VirtualOffices />} />
          <Route path="/meeting-rooms" element={<MeetingRooms />} />
          <Route path="/membership" element={<Membership />} />
          
          {/* Locations */}
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:city" element={<LocationCity />} />
          
          {/* Company */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/hybrid-working" element={<HybridWorking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Support */}
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
