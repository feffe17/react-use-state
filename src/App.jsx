import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppMain />
    </div>
  );
}

export default App;