
import React, { Component } from "react";

class BookDetails extends Component {
  render() {
    const books = [
      { id: 1, title: "React Basics", author: "Dan Abramov" },
      { id: 2, title: "JavaScript ES6", author: "Kyle Simpson" },
    ];

    return (
      <div>
        <h2> Book List</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BookDetails;
