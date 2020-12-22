import React, { useEffect } from 'react';
import * as api from '../controller/BooksController';
import Navbar from '../components/Navbar';
import Load from '../components/Load';
import Input from '../components/Input';

const BooksList = () => {
  const [books, setBooks] = React.useState(null);
  const [search, setSearch] = React.useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getAll();

      setBooks(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.search('The Linux Command Line');
      return data;
    };
    const result = fetchData();
    console.log(result);
  }, [search]);

  return (
    <>
      <Navbar />
      <br />
      <div className="container">
        <Input
          type="text"
          id="search"
          placeholder="Type the book"
          value={search}
          setValue={setSearch}
        />
        <br />
        {!books && <Load />}
        <div className="row">
          {books &&
            books.map((item, index) => {
              return (
                <div key={index} className="card col-sm-2 m-1 ">
                  <div className="card-body">{item.title}</div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default BooksList;
