
let worktime = 25;
let breaktime = 5;

function initializePomodoroTimes() {
    // Check if workTime and breakTime are already in localStorage
    if (!localStorage.getItem("workTime")) {
        localStorage.setItem("workTime", ''+(worktime)); // Default work time in minutes
    }
    if (!localStorage.getItem("breakTime")) {
        localStorage.setItem("breakTime", ''+(breaktime)); // Default break time in minutes
    }
    console.log('init');
}
function getPomodoroTimes() {
    if (typeof window === "undefined") {
        // Return default values during SSR
        return { workTime: worktime, breakTime: breaktime };
    }
    const workTime = parseInt(localStorage.getItem("workTime") || ''+worktime, 10);
    const breakTime = parseInt(localStorage.getItem("breakTime") ||''+breaktime, 10);
    // const workTime = parseInt(''+worktime, 10);
    // const breakTime = parseInt(''+breaktime, 10);
    return { workTime, breakTime };
}

function updatePomodoroTimes(newWorkTime:number, newBreakTime:number) {
    if (newWorkTime) {
        localStorage.setItem("workTime", String(newWorkTime));
    }
    if (newBreakTime) {
        localStorage.setItem("breakTime", String(newBreakTime));
    }
    
}
export {initializePomodoroTimes,getPomodoroTimes,updatePomodoroTimes};