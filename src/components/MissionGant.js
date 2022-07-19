import { useEffect, useRef, useState } from "react";
import { BryntumGantt, BryntumProjectModel } from "@bryntum/gantt-react";
import config from "./MissionGanttConfig.js";
import "../styles/MissionGant.css";
import * as storage from "../utils/persistance.js";
import missionTasks from "../_datasets/missionTasks.js";

function MissionGant() {
  const ganttRef = useRef();
  const projectRef = useRef();
  const [tasks, setTasks] = useState(missionTasks.tasks);
  const [dependencies, setDependencies] = useState(missionTasks.dependencies);

  useEffect(() => {
    // console.log("ganttRef", ganttRef.current.instance);
    const tasksFromStorage = storage.get();
    if (tasksFromStorage === null) {
      storage.set(missionTasks.tasks);
    }
    setTasks(storage.get());
  }, []);

  const handleChange = (evt) => {
    console.log(`MissionGant | handleChange: ${evt.action} - ${evt.type}`, evt);
    // TODO - Perist date changes on storage

    if (evt.action === "remove") {
      const taskId = evt.records[0].originalData.id;
      const newTasks = tasks.filter((ct) => ct.id !== taskId);
      if (newTasks[0] && newTasks[0].children) {
        newTasks[0].children = newTasks[0].children.filter(
          (c) => c.id !== taskId
        );
        setTasks(newTasks);
        storage.set(newTasks);
      }
    }
    if (evt.record) {
      // console.log(`Orginal data ${JSON.stringify(evt.record.originalData)}`);
      // console.log(`New data ${evt.record.data}`);

      // Save updated tasks to storage
      let newTasks = tasks.map((t) =>
        t.id === evt.record.id ? evt.record.data : t
      );
      if (newTasks[0] && newTasks[0].children) {
        newTasks[0].children = newTasks[0].children.map((c) =>
          c.id === evt.record.id ? evt.record.data : c
        );
      }
      // console.log("newTasks", newTasks);
      setTasks(newTasks);
      storage.set(newTasks);
    }
  };

  const handleTaskDrop = (data) => {
    console.log(`MissionGant | handleTaskDrop: ${data.type}`, data);
    console.log(`Dragged entities: ${data.context.draggedEntities}`);
  };

  const handleTaskClick = (evt) => {
    console.log(`MissionGant | handleTaskClick: "${evt.type}" event`);
    console.log(`Orginal data ${evt.taskRecord}`);
  };

  return (
    <>
      <BryntumProjectModel tasks={tasks} dependencies={dependencies} ref={projectRef} />
      <BryntumGantt
        {...config}
        onDataChange={handleChange}
        onAfterTaskDrop={handleTaskDrop}
        onTaskClick={handleTaskClick}
        ref={ganttRef}
        project={projectRef}
      />
    </>
  );
}

export default MissionGant;
