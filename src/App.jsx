import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/Homescreen.jsx";
import Page1 from "./components/Page1.jsx";
import Pagetwo from "./components/Pagetwo.jsx";
import Page3 from "./components/Page3.jsx";
import Page6 from "./components/Page6.jsx";
import Page7 from "./components/Page7.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
<title>HappyPay</title>

          <Home/>
          <div className="space-y-30">
          <Page1/>
          <Pagetwo/>
          <Page3/>
          <Page6/>
          <Page7/>
          </div>

      </div>
          )

}

export default App;
