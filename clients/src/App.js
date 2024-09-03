import React, { useState } from "react";
import "./App.css";
import img1 from "./img/img1.jpeg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpeg";
import img4 from "./img/img4.jpeg";
import img5 from "./img/img5.jpeg";
import Graph from "./components/Graph";
import Graph2 from "./components/Graph2";
import GraphBike from "./components/GraphBike";
import GraphBike2 from "./components/GraphBike2";
import GraphScooter from "./components/GraphScooter";
import GraphScooter2 from "./components/GraphScooter2";
import GraphTruck from "./components/GraphTruck";
import GraphTruck2 from "./components/GraphTruck2";
import NewSale from "./components/NewSale";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignOut from "./components/SignOut";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to scroll to a specific section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Router>
        <Routes>
          {/* Route for the page with grid columns */}
          <Route path="/" element={<Login />} />
          {/* Route for the page with grid columns */}
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <div className={`app ${sidebarOpen ? "" : ""}`}>
                <header className="header">
                  <div className="header__content">
                    <h1>Track Sales</h1>
                    <div className="user-details">
                      <SignOut />
                    </div>
                  </div>
                </header>
                <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                  <nav>
                    <ul>
                      <li onClick={() => scrollToSection("cars")}>Cars</li>
                      <li onClick={() => scrollToSection("bikes")}>Bikes</li>
                      <li onClick={() => scrollToSection("scooters")}>
                        Scooters
                      </li>
                      <li onClick={() => scrollToSection("trucks")}>Trucks</li>
                      <li onClick={() => scrollToSection("add-sale")}>
                        Add New Sale
                      </li>
                      <li onClick={() => scrollToSection("help")}>Help</li>
                    </ul>
                  </nav>
                </div>
                <button
                  className={`toggle-btn ${sidebarOpen ? "open" : ""}`}
                  onClick={toggleSidebar}
                >
                  <div className="arrow"></div>
                </button>
                <div className="main-content">
                  <p className="welcome">
                    Welcome to the Vehicle Sales Tracker
                  </p>
                  <div className="content">
                    <div className="images-container">
                      <div className="image-container">
                        <img className="image" src={img1} alt="Image 1" />
                      </div>
                      <div className="image-container">
                        <img className="image" src={img2} alt="Image 2" />
                      </div>
                      <div className="image-container">
                        <img className="image" src={img3} alt="Image 3" />
                      </div>
                      <div className="image-container">
                        <img className="image" src={img4} alt="Image 4" />
                      </div>
                      <div className="image-container">
                        <img className="image large" src={img5} alt="Image 5" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sections */}
                <section id="cars" className="section">
                  <br />
                  <br />
                  <hr class="bold" />
                  <h1 className="mb-10 mt-10 font-bold text-xl">
                    <center>Car Sales</center>
                  </h1>
                  <p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Chart */}
                      <Graph />
                      {/* Form */}
                      <Graph2 />
                    </div>
                  </p>
                </section>
                <section id="bikes" className="section">
                  <br />
                  <br />
                  <hr class="bold" />
                  <h1 className="mb-10 mt-10 font-bold text-xl">
                    <center>Bike Sales</center>
                  </h1>
                  <p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Chart */}
                      <GraphBike />
                      {/* Form */}
                      <GraphBike2 />
                    </div>
                  </p>
                </section>
                <section id="scooters" className="section">
                  <br />
                  <br />
                  <hr class="bold" />
                  <h1 className="mb-10 mt-10 font-bold text-xl">
                    <center>Scooter Sales</center>
                  </h1>
                  <p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Chart */}
                      <GraphScooter />
                      {/* Form */}
                      <GraphScooter2 />
                    </div>
                  </p>
                </section>
                <section id="trucks" className="section">
                  <br />
                  <br />
                  <hr class="bold" />
                  <h1 className="mb-10 mt-10 font-bold text-xl">
                    <center>Truck Sales</center>
                  </h1>
                  <p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Chart */}
                      <GraphTruck />
                      {/* Form */}
                      <GraphTruck2 />
                    </div>
                  </p>
                </section>
                <section id="add-sale" className="section">
                  <br />
                  <br />
                  <hr class="bold" />
                  <p>
                    <NewSale />
                  </p>
                </section>
                <section id="help" className="section">
                  <br />
                  <br />
                  <hr class="bold" />
                  <h1 className="mb-10 mt-10 font-bold text-xl">
                    <center>Help</center>
                  </h1>
                  <p>This is the content for the Help section.</p>
                </section>
                <br />
                <br />
                <footer className="footer">
                  <p>Vehicle sales Tracker</p>
                  <div className="social-icons">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <p className="copyright">
                    © 2024 ABC Company. All Rights Reserved.
                  </p>
                </footer>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
