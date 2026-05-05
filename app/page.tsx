"use client";
import { useState } from "react";
import { TaskInput } from "./TaskInput/taskInput";
import { CheckBox } from "./CheckBox/checkBox";

export default function App() {
  const [userTasks, setUserTasks] = useState<string[]>([]);
  return (
    <div style={{
      maxWidth: '400px',
      margin: '40px auto',
      background: 'rgba(255,255,255,0.85)',
      borderRadius: '24px',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      padding: '32px 24px',
      border: '1px solid #e0e0e0',
      backdropFilter: 'blur(4px)'
    }}>
      <TaskInput setUserTasks={setUserTasks} />
      <CheckBox userTasks={userTasks} setUserTasks={setUserTasks} />
    </div>
  );
}