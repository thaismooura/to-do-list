"use client";
import { useState } from "react";
import { TaskInput } from "./TaskInput/taskInput";
import { CheckBox } from "./CheckBox/checkBox";

export default function App() {
  const [userTasks, setUserTasks] = useState<string[]>([]);
  return (
    <div>
      <TaskInput setUserTasks={setUserTasks}></TaskInput>
      <CheckBox userTasks={userTasks} setUserTasks={setUserTasks}></CheckBox>
    </div>
  );
}