import React from "react";
import CourseDetails from "./CourseDetails";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import "./App.css";

function App() {

  const courses = [
    {
      id: 1,
      name: "Angular",
      date: "4/5/2021"
    },
    {
      id: 2,
      name: "React",
      date: "6/3/2021"
    }
  ];

  const books = [
    {
      id: 101,
      name: "Master React",
      price: 670
    },
    {
      id: 102,
      name: "Deep Dive into Angular 11",
      price: 800
    },
    {
      id: 103,
      name: "Mongo Essentials",
      price: 450
    }
  ];

  const blogs = [
    {
      id: 1,
      title: "React Learning",
      author: "Stephen Biz",
      description: "Welcome to learning React!"
    },
    {
      id: 2,
      title: "Installation",
      author: "Schwezdneier",
      description: "You can install React from npm."
    }
  ];

  return (
    <div className="container">

      <div className="column">
        <CourseDetails courses={courses} />
      </div>

      <div className="column">
        <BookDetails books={books} />
      </div>

      <div className="column last">
        <BlogDetails blogs={blogs} />
      </div>

    </div>
  );
}

export default App;
