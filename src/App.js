import MissionGant from "./components/MissionGant";
import { ganttConfig } from "./data/MissionGanttConfig";


function App() {
  return (
    <MissionGant config={ ganttConfig } />
  );
}

export default App;
