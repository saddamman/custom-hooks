import React from "react";
import Section from "../UI/Section";
import TaskItem from "./TaskItem";

const Task = (props) => {
  let tasklist = <h2>There is no taks stil added !!</h2>;
  if (props.taskItems.length > 0) {
    tasklist = (
      <ul className="list-group">
        {props.taskItems.map((item) => {
          return <TaskItem key={item.id}> {item.text} </TaskItem>;
        })}
      </ul>
    );
  }
  let content = tasklist;
  if (props.onEroor) {
    const button = (
      <button type="button" onClick={props.onFectch}>
        Retry
      </button>
    );
    content = button;
  } else if (props.loading) {
    content = "Loding...";
  }
  return (
    <div>
      <Section className="text-center">{content}</Section>
    </div>
  );
};

export default Task;
