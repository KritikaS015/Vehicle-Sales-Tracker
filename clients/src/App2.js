import './App.css';

import Graph from './components/Graph';
import Graph2 from './components/Graph2';
import GraphBike from './components/GraphBike';
import GraphBike2 from './components/GraphBike2';
import GraphScooter from './components/GraphScooter';
import GraphScooter2 from './components/GraphScooter2';
import GraphTruck from './components/GraphTruck';
import GraphTruck2 from './components/GraphTruck2';
// import Form from './components/Form';
import NewSale from './components/NewSale';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Vehicle Sales Tracker</h1>
        <Router>
          <Routes>
            {/* Route for the page with grid columns */}
            <Route path="/" element={
              <div className="grid md:grid-cols-2 gap-4">
                {/* Chart */}
                <Graph />
                {/* Form */}
                <Graph2 />
              </div>
            } />
            <Route path="/bike" element={
              <div className="grid md:grid-cols-2 gap-4">
                {/* Chart */}
                <GraphBike />
                {/* Form */}
                <GraphBike2 />
              </div>
            } />
            <Route path="/scooter" element={
              <div className="grid md:grid-cols-2 gap-4">
                {/* Chart */}
                <GraphScooter />
                {/* Form */}
                <GraphScooter2 />
              </div>
            } />
            <Route path="/truck" element={
              <div className="grid md:grid-cols-2 gap-4">
                {/* Chart */}
                <GraphTruck />
                {/* Form */}
                <GraphTruck2 />
              </div>
            } />
            {/* Route for the page with NewSale component */}
            <Route path="/newsale" element={<NewSale />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;