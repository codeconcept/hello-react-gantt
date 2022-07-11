import { BryntumGantt } from "@bryntum/gantt-react";
import '../styles/MissionGant.css';


function MissionGant({ config }) {
  return (
    <BryntumGantt { ...config } />
  );
}

export default MissionGant;