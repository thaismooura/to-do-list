import { useState } from "react";
import {
  Button,
  ButtonContainer,
  TrackMessageCounter,
} from "./TaskMessage.styles";

interface TaskMessageProps {
  completedTasks: number;
}

export function TaskMessage({ completedTasks }: TaskMessageProps) {
  const [userLanguage, setUserLanguage] = useState("english");
  const noCompletedTasksMessage =
    userLanguage === "english"
      ? "You have no tasks completed 😢"
      : "Você não tem tarefas concluídas 😢";

      const congratsMessage = userLanguage === "english"? `Congrats you have completed the total of ${completedTasks} tasks 🎉`:
      `Parabéns você completou o total de ${completedTasks} atividades 🎉`;

  return (
    <div>
      <ButtonContainer>
        <Button
          onClick={() =>
            setUserLanguage(
              userLanguage === "Portuguese" ? "english" : "Portuguese",
            )
          }
        >
          Portuguese option
        </Button>
      </ButtonContainer>

      {completedTasks === 0 && (
        <TrackMessageCounter>{noCompletedTasksMessage}</TrackMessageCounter>
      )}
      {completedTasks > 0 && (
        <TrackMessageCounter>
          {congratsMessage}
        </TrackMessageCounter>
      )}
    </div>
  );
}
