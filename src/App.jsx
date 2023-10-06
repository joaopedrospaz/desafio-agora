import { Route, Routes } from 'react-router-dom'
import './App.css'
import Survey from './components/survey'

function App() {
  return (
   <Routes>
      <Route path='/' element={<Survey />} />
   </Routes>
  )
}

export default App
