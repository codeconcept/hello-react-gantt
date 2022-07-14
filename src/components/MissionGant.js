import { BryntumGantt } from "@bryntum/gantt-react";
import '../styles/MissionGant.css';


function MissionGant({ config }) {

  const handleChange = (data) => {
    console.log('handleChange', data);
  };

  const handleBeforeEdit = (data) => {
    console.log('handleBeforeEdit', data);
  }

  return (
    <BryntumGantt { ...config } onDataChange={(evt) => handleChange(evt)} onBeforeCellEditStart={handleBeforeEdit} />
  );
}

export default MissionGant;