import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <section className="header">
        <h1> College Schedule Builder</h1>
       </section>
       <section>
          <h2>Add a course</h2>
        <form>
          <label>
            Course name:
            <br></br>
            <input type='text' name='Course name'/>
          </label>
          <label>
            <br></br>
            Day:
            <br></br>
            <input type='text' name='Day'/>
          </label>
          <label>
            <br></br>
            Start:
            <br></br>
            <input type='text' name='Start'/>
          </label>
          <label>
            <br></br>
            End:
            <br></br>
            <input type='text' name='End'/>
          </label>
          <br></br>
           <input type="submit" value="Add" />
           <br></br>
        </form>

       </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
