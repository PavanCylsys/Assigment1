[4:44 PM] Priyanshu Sahu

import React, { useEffect, useState } from "react";

import "./home.css";




const Home = () => {

  const [todos, setTodos] = useState([]);

  const [inputTitle, setInputTitle] = useState("");

  const [inputNote, setInputNote] = useState("");

  const [filterStatus, setFilterStatus] = useState("all");

  const [filteredTodos, setFilteredTodos] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const url = "http://127.0.0.1:5000/api/v1/todolists";




  useEffect(() => {

    fetch(url)

      .then((response) => response.json())

      .then((data) => {

        setTodos(data);

        applyFilter(filterStatus);

      })

      .catch((error) => console.log(error));

  }, []);




  const addTodo = () => {

    fetch(url, {

      method: "POST",

      body: JSON.stringify({

        todolist: {

          title: inputTitle,

          note: inputNote,

        },

      }),

      headers: {

        "Content-Type": "application/json",

      },

    })

      .then((response) => response.json())

      .then(() => {

        const data={

          title: inputTitle,

          note: inputNote

        }

        setTodos((prevTodos) => [...prevTodos, data]);

        setInputTitle("");

        setInputNote("");

        applyFilter(filterStatus);

      })

      .catch((error) => {

        console.log(error);

      });

  };




  const handleTitle = (event) => {

    setInputTitle(event.target.value);

  };




  const handleNote = (event) => {

    setInputNote(event.target.value);

  };




  const handleAddTodo = () => {

    addTodo();

  };




  const handleFilter = (event) => {

    const status = event.target.value;

    setFilterStatus(status);

    applyFilter(status);

  };




  const applyFilter = (status) => {

    let filteredData = todos;

    if (status === "active") {

      filteredData = todos.filter((todo) => !todo.completed);

    } else if (status === "complete") {

      filteredData = todos.filter((todo) => todo.completed);

    }

    setFilteredTodos(filteredData);

  };




  const handleSearch = (event) => {

    const term = event.target.value;

    setSearchTerm(term);

    applySearch(term);

  };




  const applySearch = (term) => {

    let filteredData = todos;

    if (term !== "") {

      filteredData = todos.filter((todo) =>

        todo.title.toLowerCase().includes(term.toLowerCase())

      );

    }

    setFilteredTodos(filteredData);

  };




  const handleToggleComplete = (index) => {

    const updatedTodos = [...todos];

    updatedTodos[index].completed = !updatedTodos[index].completed;

    setTodos(updatedTodos);

  };




  useEffect(() => {

    applyFilter(filterStatus);

  }, [todos, filterStatus]);




  return (

    <div className="container">

      <h1 className="text-center mt-4 mb-5">Todo List</h1>

      <div className="row">

        <div className="col-md-6 sc">

          <input

            type="text"

            className="form-control search-task"

            placeholder="Search tasks"

            value={searchTerm}

            onChange={handleSearch}

          />

        </div>

      </div>

      <br />

      <div className="row mt-3 inp">

        <div className="col-md-6">

          <input

            type="text"

            className="form-control add-task"

            placeholder="Add title"

            value={inputTitle}

            onChange={handleTitle}

          />

        </div>

        <br />

        <div className="col-md-6">

          <input

            type="text"

            className="form-control add-task"

            placeholder="Add Note"

            value={inputNote}

            onChange={handleNote}

          />

        </div>

      </div>

      <br />

      <div className="row mt-3">

        <div className="col-md-6">

          <button className="btn btn-primary" onClick={handleAddTodo}>

            Add Todo

          </button>

        </div>

        <br />

        <div className="col-md-6">

          <select

            className="form-select"

            value={filterStatus}

            onChange={handleFilter}

          >

            <option value="all">All</option>

            <option value="active">Active</option>

            <option value="complete">Complete</option>

          </select>

        </div>

      </div>

      <hr />

      <div className="row mt-3">

        <div className="col-md-12">

          <table className="table">

            <thead>

              <tr>

                <th>Title</th>

                <th>Note</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {filteredTodos.map((todo, index) => (

                <tr key={index}>

                  <td>{todo.title}</td>

                  <td>{todo.note}</td>

                  <td>

                    <div className="form-check">

                      <input

                        type="checkbox"

                        className="form-check-input"

                        checked={todo.completed}

                        onChange={() => handleToggleComplete(index)}

                      />

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

};




export default Home;




[4:55 PM] Priyanshu Sahu

import React, { useEffect, useState } from "react";

import "./home.css";




const Home = () => {

  const [todos, setTodos] = useState([]);

  const [inputTitle, setInputTitle] = useState("");

  const [inputNote, setInputNote] = useState("");

  const [filterStatus, setFilterStatus] = useState("all");

  const [filteredTodos, setFilteredTodos] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const url = "http://127.0.0.1:5000/api/v1/todolists";




  useEffect(() => {

    fetch(url)

      .then((response) => response.json())

      .then((data) => {

        setTodos(data);

        applyFilter(filterStatus);

      })

      .catch((error) => console.log(error));

  }, []);




  const addTodo = () => {

    fetch(url, {

      method: "POST",

      body: JSON.stringify({

        todolist: {

          title: inputTitle,

          note: inputNote,

        },

      }),

      headers: {

        "Content-Type": "application/json",

      },

    })

      .then((response) => response.json())

      .then(() => {

        const data={

          title: inputTitle,

          note: inputNote

        }

        setTodos((prevTodos) => [...prevTodos, data]);

        setInputTitle("");

        setInputNote("");

        applyFilter(filterStatus);

      })

      .catch((error) => {

        console.log(error);

      });

  };




  const handleTitle = (event) => {

    setInputTitle(event.target.value);

  };




  const handleNote = (event) => {

    setInputNote(event.target.value);

  };




  const handleAddTodo = () => {

    addTodo();

  };




  const handleFilter = (event) => {

    const status = event.target.value;

    setFilterStatus(status);

    applyFilter(status);

  };




  const applyFilter = (status) => {

    let filteredData = todos;

    if (status === "active") {

      filteredData = todos.filter((todo) => !todo.completed);

    } else if (status === "complete") {

      filteredData = todos.filter((todo) => todo.completed);

    }

    setFilteredTodos(filteredData);

  };




  const handleSearch = (event) => {

    const term = event.target.value;

    setSearchTerm(term);

    applySearch(term);

  };




  const applySearch = (term) => {

    let filteredData = todos;

    if (term !== "") {

      filteredData = todos.filter((todo) =>

        todo.title.toLowerCase().includes(term.toLowerCase())

      );

    }

    setFilteredTodos(filteredData);

  };




  const handleToggleComplete = (index) => {

    const updatedTodos = [...todos];

    updatedTodos[index].completed = !updatedTodos[index].completed;

    setTodos(updatedTodos);

  };




  useEffect(() => {

    applyFilter(filterStatus);

  }, [todos, filterStatus]);




  return (

    <div className="container">

      <h1 className="text-center mt-4 mb-5">Todo List</h1>

      <div className="row">

        <div className="col-md-6 sc">

          <input

            type="text"

            className="form-control search-task"

            placeholder="Search tasks"

            value={searchTerm}

            onChange={handleSearch}

          />

        </div>

      </div>

      <br />

      <div className="row mt-3 inp">

        <div className="col-md-6">

          <input

            type="text"

            className="form-control add-task"

            placeholder="Add title"

            value={inputTitle}

            onChange={handleTitle}

          />

        </div>

        <br />

        <div className="col-md-6">

          <input

            type="text"

            className="form-control add-task"

            placeholder="Add Note"

            value={inputNote}

            onChange={handleNote}

          />

        </div>

      </div>

      <br />

      <div className="row mt-3">

        <div className="col-md-6">

          <button className="btn btn-primary" onClick={handleAddTodo}>

            Add Todo

          </button>

        </div>

        <br />

        <div className="col-md-6">

          <select

            className="form-select"

            value={filterStatus}

            onChange={handleFilter}

          >

            <option value="all">All</option>

            <option value="active">Active</option>

            <option value="complete">Complete</option>

          </select>

        </div>

      </div>

      <hr />

      <div className="row mt-3">

        <div className="col-md-12">

          <table className="table">

            <thead>

              <tr>

                <th>Title</th>

                <th>Note</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {filteredTodos.map((todo, index) => (

                <tr key={index}>

                  <td>{todo.title}</td>

                  <td>{todo.note}</td>

                  <td>

                    <div className="form-check">

                      <input

                        type="checkbox"

                        className="form-check-input"

                        checked={todo.completed}

                        onChange={() => handleToggleComplete(index)}

                      />

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

};




export default Home;


