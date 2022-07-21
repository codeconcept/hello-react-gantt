const LOCAL_STORAGE_KEY_TASKS = "by-mission-to-mars-tasks";
const LOCAL_STORAGE_KEY_DEPS = "by-mission-to-mars-deps";

const setTasks = (data) => {
  if (!data) {
    return;
  }
  localStorage.setItem(LOCAL_STORAGE_KEY_TASKS, JSON.stringify(data));
};

const getTasks = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY_TASKS);
  if (data === null) {
    return null;
  }
  const tasks = JSON.parse(data);
  return tasks;
};

const setDependencies = (data) => {
  if (!data) {
    return;
  }
  localStorage.setItem(LOCAL_STORAGE_KEY_DEPS, JSON.stringify(data));
};

const getDependencies = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY_DEPS);
  if (data === null) {
    return null;
  }
  const dependencies = JSON.parse(data);
  return dependencies;
};

const storage = { setTasks, getTasks, setDependencies, getDependencies };
export default storage;