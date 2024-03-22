import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StateFulForm from './Components/StateFulForm/StateFulForm'
import RefForm from './Components/RefForm/RefForm'

function App() {
  

  return (
    <div className='text-center'>
      <h1>Here we go Module-46</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      <RefForm></RefForm>
    </div >
  )
}

export default App
