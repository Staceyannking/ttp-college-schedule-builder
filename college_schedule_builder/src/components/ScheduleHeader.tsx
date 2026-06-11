import { useState } from "react";

type Course = {
  id: number;
  courseName: string;
  day: string;
  start: string;
  end: string;
};

function ScheduleHeader() {
  const [courses, setCourses] = useState<Course[]>([]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const newCourse: Course = {
      id: Date.now(),
      courseName: form.courseName.value,
      day: form.day.value,
      start: form.start.value,
      end: form.end.value,
    };

    setCourses([...courses, newCourse]);
    form.reset();
  }

  return (
    <>
      <div className="bg-gray-50 border rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
          Add a course
        </h2>

        <form onSubmit={handleSubmit} className="flex gap-4 items-end">
          <div className="flex flex-col flex-1">
            <label className="font-medium mb-2">Course Name</label>
            <input
              name="courseName"
              type="text"
              placeholder="course name"
              className="border rounded-lg p-3"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-2">Day</label>
            <select name="day" className="border rounded-lg p-3 w-48">
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-2">Start</label>
            <input name="start" type="time" className="border rounded-lg p-3" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-2">End</label>
            <input name="end" type="time" className="border rounded-lg p-3" />
          </div>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            + Add
          </button>
        </form>
      </div>

      <section>
        <h2 className="text-3xl font-bold mt-10 mb-6">My Schedule</h2>

        {courses.map((course) => (
          <div key={course.id} className="border rounded-xl p-4 mb-4">
            <p>
              {course.courseName} - {course.day} from {course.start} to{" "}
              {course.end}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}

export default ScheduleHeader;

