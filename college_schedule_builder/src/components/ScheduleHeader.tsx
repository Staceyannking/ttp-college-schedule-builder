function ScheduleHeader() {
return (
  <> 
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
</>
)
}

export default ScheduleHeader

