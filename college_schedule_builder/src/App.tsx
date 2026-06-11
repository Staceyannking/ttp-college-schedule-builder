import { useState } from 'react'
import './App.css'
import ScheduleHeader from './components/ScheduleHeader'

function App() {


  return (
    <>
      <section className="header">
        <h1> College Schedule Builder</h1>
       </section>
       <div>
       <ScheduleHeader></ScheduleHeader>
       </div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
