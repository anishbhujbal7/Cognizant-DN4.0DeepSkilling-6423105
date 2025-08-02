import { Component } from "react";

class CourseDetails extends Component {
  render() {
    const courses = [
      { id: 1, name: "Frontend with React", duration: "6 weeks" },
      { id: 2, name: "Fullstack MERN", duration: "12 weeks" },
    ];

    return (
      <div>
        <h2>Available Courses</h2>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              {course.name} - <em>{course.duration}</em>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CourseDetails;
