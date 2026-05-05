"use client";
import { useState } from "react";
import { Button } from "../TaskInput/taskManager.styles";

interface TaskInputProps {
  setUserTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

export function TaskInput({ setUserTasks }: TaskInputProps) {
  const [userTask, setUserTask] = useState<string>("");
  return (
    <div>
      <input type="text" onChange={(e) => setUserTask(e.target.value)}></input>
      <Button onClick={() => setUserTasks((prev) => [...prev, userTask])}>
        Add task
      </Button>
    </div>
  );
}
