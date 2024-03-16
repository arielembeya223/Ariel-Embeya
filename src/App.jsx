import React from 'react';
import './App.css';
import Particulesbg from './components/Particulesbg';
import { Profil } from './components/home.jsx/profil';

function Home(){
   return(
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
          <div className="home-content">
              <Profil></Profil>
          </div>
      </div>
   )       
}

function App() {
    return (
    <>
      <div style={{ position: "relative", zIndex: 1 }}>
          <Particulesbg />
          <Home></Home>
      </div>
    </>
    );
}

export default App;
