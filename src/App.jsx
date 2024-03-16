import React from 'react';
import './App.css';
import Particulesbg from './components/Particulesbg';

function App() {
    return (
        <div style={{ position: "relative", zIndex: 1 }}>
            <Particulesbg />
            <div style={{ color: "#ffffff" }}>bgbgbgbgbgb<img src='vitelogo' className='logo'></img></div>
        </div>
    );
}

export default App;
