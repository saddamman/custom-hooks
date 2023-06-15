import React, { useState } from "react";
import Section from "../UI/Section";
import FormTask from "./FormTask";

const NewTask = (props) => {
  const [error, setError] = useState("");
  const [isloding, setLoading] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const entredNewTaskHandler = async (taskText) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        body: JSON.stringify({ text: taskText }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) {
        throw new Error("Request Failed ");
      }
      const data = await response.json();

      props.onAddTask(data);

      setShowErrorMsg(false);
    } catch (error) {
      setError(error.message || "something went wrong!");
      setShowErrorMsg(true);
    }
    setLoading(false);
  };
  const entredTaskHander = (taskValue) => {
    entredNewTaskHandler(taskValue);
  };
  return (
    <Section className="mb-3">
      <FormTask onEntredTask={entredTaskHander} loader={isloding} />
      {showErrorMsg && (
        <p className="mb-0">
          <small className="text-danger">{error}</small>
        </p>
      )}
    </Section>
  );
};

export default NewTask;
