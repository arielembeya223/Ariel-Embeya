import React from 'react';
import './App.css';
import { Profil } from './components/home/profil';
import { Present } from './components/home/presentation';
import { lazy } from 'react';

const Particules= lazy(() => import('./components/Particulesbg'));
function Home(){
   return(
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
          <div className="home-content">
              <Profil />
              <div className="space"></div> 
              <Present />
          </div>
      </div>
   )       
   }
function App() {
    return (
    <>
      <div style={{ position: "relative", zIndex: 1 }}>
          <Particules/>
          <Home />
      </div>
    </>
    );
}

export default App;
