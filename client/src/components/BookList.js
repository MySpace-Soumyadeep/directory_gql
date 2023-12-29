import React from 'react';
import { useQuery, gql } from '@apollo/client';
 
const GET_BOOKS_QUERY = gql`
  query GetBooks {
    books {
      id
      name
      genre
    }
  }
`;

function DisplayBooks() {
  const { loading, error, data } = useQuery(GET_BOOKS_QUERY);

  console.log({ data });

  if (loading) return <p>Loading Books...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {data?.books?.map((book) => (
        <li key={book?.id}>
          <h3>{book?.name}</h3>
          <br />
          <b>About this book:</b>
          <p>{book?.genre}</p>
          <br />
        </li>
      ))}
    </>
  );
}

function BookList() {
  return (
    <div>
      <ul id="book-list">
        <DisplayBooks />
      </ul>
    </div>
  );
}

export default BookList;
