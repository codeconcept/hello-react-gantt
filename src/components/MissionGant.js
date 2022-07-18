import { BryntumGantt } from "@bryntum/gantt-react";
import config from "./MissionGanttConfig";
import "../styles/MissionGant.css";

function MissionGant() {
  const handleChange = (evt) => {
    console.log(
      `MissionGant | handleChange: ${evt.action} - ${evt.type}`,
      evt
    );
  };

  const handleTaskDrop = (data) => {
    console.log(
      `MissionGant | handleTaskDrop: ${data.action} - ${data.type}`,
      data
    );
  };

  const handleTaskClick = (evt) => {
    console.log(`MissionGant | handleTaskClick: "${evt.type}" event`);
    console.log(`Orginal data ${evt.taskRecord}`);
  };

  return (
    <BryntumGantt
      {...config}
      onDataChange={handleChange}
      onAfterTaskDrop={handleTaskDrop}
      onTaskClick={handleTaskClick}
    />
  );
}

export default MissionGant;
