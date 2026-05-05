"use client";

import { Dispatch, RefObject, SetStateAction, useRef, useState } from "react";
import { TaskMessage } from "../TaskMessage/TaskMessage";
import { Button, ButtonContainer } from "./Checkbox.styles";

interface CheckBoxProps {
  userTasks: string[];
  setUserTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

export function CheckBox({ userTasks, setUserTasks }: CheckBoxProps) {
  const completedTasks = useRef(0);

  return (
    <div>
      <TaskMessage completedTasks={completedTasks.current} />
      {userTasks.map((task) => (
        <li key={task}>
          <input
            type="checkbox"
            onChange={(e) => handleOnChange(e.target.checked, task, completedTasks, setUserTasks)}
          ></input>
          {task}
        </li>
      ))}
    </div>
  );
}

const handleOnChange = (
  isSelected: boolean,
  task: string,
  completedTasks: RefObject<number>,
  setUserTasks: Dispatch<SetStateAction<string[]>>,
) => {
  if (isSelected) {
    setUserTasks((prev) => prev.filter((t) => t !== task));
    completedTasks.current = completedTasks.current + 1;
  } else {
    setUserTasks((prev) => [...prev, task]);
  }
};
