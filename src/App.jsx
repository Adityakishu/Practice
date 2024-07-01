import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from "./component/Navbar"
import Login from './component/Login'
import SignUp from './component/SignUp'
import Textanalyzer from './component/Textanalyzer'
import Card from './component/Card'
import Calculator from './component/Calculator'
import Footer from './component/Footer'
import Netflix from './component/Netflix'
import WheelAnimation from './component/WheelAnimation'


function App(props) {
  



  return (
    
    <>

    <Router>
      <Navbar title='adit' heading='kishu'/>
      <Routes>


        <Route path='Login' element={<Login/>}/>
        <Route path='SignUp' element={<SignUp/>}/>
        <Route path='Textanalyzer' element={<Textanalyzer/>}/>
        <Route path='Card' element={<Card/>}/>
        <Route path='Calculator' element={<Calculator/>}/>
        <Route path='Netflix' element={<Netflix/>}/>
        <Route path='WheelAnimation' element={<WheelAnimation/>}/>



      </Routes>
      <Footer/>
    </Router>



    </>
  )
}

export default App
