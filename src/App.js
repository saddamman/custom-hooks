import React, { useCallback, useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Header from "./layout/Header";
import Task from "./components/tasks/Task";
import NewTask from "./components/taskForm/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTask] = useState([]);

  const { isLoading, error, sendRequest: fetchTask } = useHttp();

  // const [error, setEroor] = useState(false);
  // const [isLoading, setLoading] = useState("false");

  useEffect(() => {
    const transformTask = (taskObj) => {
      const loadTask = [];
      for (const taskKey in taskObj) {
        loadTask.push({ id: taskKey, text: taskObj[taskKey].text });
      }
      setTask(loadTask);
    };
    fetchTask({ url: "http://localhost:3000/posts" }, transformTask);
  }, [fetchTask]);
  const taskHandler = (taskVal) => {
    setTask((prevTasks) => [...prevTasks, taskVal]);
  };
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto my-4">
            <NewTask onAddTask={taskHandler} />
            <Task taskItems={tasks} loading={isLoading} onEroor={error} onFectch={fetchTask} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
