import { useState } from "react"
import NavBar from "./components/navBar/navBar"


function App() {
  const [cartCount, setCartCount] = useState(2)
    return (
      <>
        <NavBar cartCount={cartCount}/>
      </>
    )
}

export default App