import React, { useRef, useState } from "react";

const FormTask = (props) => {
  const [error, setEroor] = useState(false);
  const inputRef = useRef();

  const submitTaskHandler = (event) => {
    event.preventDefault();
    let entredTaskValue = inputRef.current.value;

    if (entredTaskValue.trim().length > 0) {
      props.onEntredTask(entredTaskValue);
      setEroor(false);
    } else {
      setEroor(true);
    }
  };

  return (
    <form onSubmit={submitTaskHandler} className="taskForm ">
      <div className="input-group">
        <input type="text" className="form-control border-info" placeholder="Enter Task" ref={inputRef} />
        <button className="btn btn-info text-white" type="submit" id="button-addon1">
          {!props.loader ? "Add Task" : "loading..."}
        </button>
      </div>
      {error && (
        <p className="mb-0">
          <small>Please Enter Correct task !</small>
        </p>
      )}
    </form>
  );
};

export default FormTask;
