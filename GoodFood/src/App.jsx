import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import foodBackground from './assets/gold.jpg'
import './App.css'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center blur-sm scale-100 opacity-95"
      style={{
        backgroundImage: `url(${foodBackground})`
      }}
    />
   <div className="navbar bg-yellow-600 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl mr-150">ByHaerina</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 text-zinc-100">
      <li><a>Home</a></li>
      <li><a>Order</a></li>
      <li><a>About</a></li>
      <li>
      </li>
    </ul>
  </div>
</div>
</div>
  );
}

export default App;