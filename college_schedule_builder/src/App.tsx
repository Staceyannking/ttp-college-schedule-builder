import { useState } from 'react'
import './App.css'
import ScheduleHeader from './components/ScheduleHeader'

function App() {


  return (
    <>
    <div className="max-w-5xl mx-auto p-8">
    <div className="border rounded-2xl p-8 bg-white shadow-sm">

      <section  className="text-4xl font-bold mb-8">
        <h1> College Schedule Builder</h1>
       </section>
       <div>
       <ScheduleHeader/>
       </div>
    </div>
    </div>
    </>
  )
}

export default App
