const LOCAL_STORAGE_KEY = "by-mission-tp-mars"

export function set(data) {
    if(!data) {
        return;
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

export function get() {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(data === null) {
        return null;
    }
    const tasks = JSON.parse(data);
    return tasks;
}