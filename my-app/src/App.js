import {defaultTheme, Grid, Provider, View} from "@adobe/react-spectrum"
import Home from "./components/Home/Home"
import Airport from "./components/Airport"
import AirportDetails from "./components/AirportDetails"
import {Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <Provider theme={defaultTheme} UNSAFE_style={{fontFamily:"Roboto"}} >
        <Routes>
          <Route path="/" element={<Home><Airport /></Home>} />
          <Route path="/details/:id" element={<Home><AirportDetails /></Home>} />
        </Routes>
    </Provider>
  )
}

export default App