import React, { useState } from "react";

function App() {
  const [task, setTask] = useState([]);

  const [title, setTitle] = useState("");
  const [dedline, setDedline] = useState("");
  const [tel, setTel] = useState("");
  const [name, setName] = useState("");



  const addTask = (e) => {
    e.preventDefault();

    let newTask = {
      name: name,
      tel: tel,
      id: Date.now(),
      title: title,
      dedline: dedline,
    };

    if (newTask.name.length == 0 || newTask.tel.length == 0 || newTask.title.length == 0 || newTask.dedline.length == 0) {
      alert("malumotlarni to'ldiring!")
    } else {
      setTask([...task, newTask]);
    }
    setDedline('')
    setTitle("")
    setName("")
    setTel("")
  };

  const removeTask = (id) => {
    
    let fillterTask = task.filter( (item) =>  item.id !== id)
      
  setTask(fillterTask)
}

return (
  <>
    <div className="p-5 w-75 shadow m-5 rounded mx-auto ">
      <h1 className="text-success fs-4 text-center">TASK MANAGER APP</h1>
      <hr />

      <form className="form" onSubmit={(e) => addTask(e)}>
        <label htmlFor="task_title" className="w-50 d-block mx-auto m-5">
          <p className="text-primary fw-bold text-uppercase">
            NAME
          </p>
          <input
            type="text"
            id="task_title"
            className="form-control p-3 w-100"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="task_title" className="w-50 d-block mx-auto">
          <p className="text-primary fw-bold text-uppercase">
            FAMILYA
          </p>
          <input
            type="text"
            id="task_title"
            className="form-control p-3 w-100"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label htmlFor="task_title" className="w-50 d-block mx-auto m-5">
          <p className="text-primary fw-bold text-uppercase">
            TEL
          </p>
          <input
            type="tel"
            id="task_title"
            className="form-control p-3 w-100"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </label>


        <label htmlFor="task_title" className="w-50 d-block mx-auto my-5">
          <p className="text-primary fw-bold text-uppercase">
            DATE
          </p>
          <input
            type="date"
            id="task_title"
            className="form-control p-3 w-100"
            value={dedline}
            onChange={(e) => setDedline(e.target.value)}
          />
        </label>

        <button
          type="submit"
          id="task_title"
          className="btn btn-success w-50 mx-auto d-block p-3"
        >
          ADD
        </button>
      </form>
    </div>
    <div className="shadow p-5 w-75 mx-auto">
      <table className="table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>TEL</th>
            <th>ID</th>
            <th>TITLE</th>
            <th>DEADLINE</th>
            <th>REMOVE</th>

          </tr>
        </thead>

        <tbody>
          {task?.map((item, index) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.tel}</td>
                <td>{index}</td>
                <td>{item.title}</td>
                <td>{item.dedline}</td>
                <td>
                  {" "}
                  <button onClick={ () => removeTask(item.id)} className="btn btn-danger">DELETE</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  </>
);
}

export default App;
