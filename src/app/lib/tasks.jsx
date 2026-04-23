

import task from '../data/tasks.json'


const getTaskData = async () => {
    return task
}
export default getTaskData;




export const  PostTask = async (newTask) => {
   newTask.id = task.length + 1;
   task.unshift(newTask)
return { success: true, message: "Task added successfully!" }
   
}