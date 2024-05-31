// import './App.css';
// import Card from './Component/Cards/Card';
// import Footer from './Component/Footer/Footer';
// import Mid from './Component/Mid/Mid';
// import New from './Component/Mid/New';
// import Nav2 from './Component/Nav/Nav2';
// import Navbar from './Component/Nav/Navbar';
// import Setup from './Component/Setup/Setup';

// function App() {
//   return (
//     <div style={{marginLeft:"50px",marginRight:"50px"}}>
//    {/* <Navbar/>
//    <Nav2/>
//    <Card/>
//    <Mid/>
//    <New/>
//    <Footer/> */}
//    <Setup/>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Component/Nav/Navbar";
import Nav2 from "./Component/Nav/Nav2";
// import Card from "./Component/Cards/Card";
import Mid from "./Component/Mid/Mid";
import New from "./Component/Mid/New";
import Setup from "./Component/Setup/Setup";
import Footer from "./Component/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
     
  
      <div style={{ marginLeft: "30px", marginRight: "30px" }}>
        <Routes>
          <Route exact path="/" element={<Nav2 />} />
        
          {/* <Route path="/Card" element={<Card />} /> */}
          <Route path="/mid" element={<Mid />} />
          <Route path="/New" element={<New />} />
          <Route path="/setup" element={<Setup />} />
        </Routes>
        <Footer />
      </div>
     


{/* <Nav2/>
<Card/>
<Mid/>
<New/> */}
</div>
  );
}

export default App;

