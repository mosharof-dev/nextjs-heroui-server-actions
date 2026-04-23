import React from 'react';
import getTaskData from '../lib/tasks';
import { TaskCard } from '@/Components/TaskCard';

const TaskPage = async() => {
    const data = await getTaskData()
    console.log(data);
    return (
        <div>
            <h2>Task: {data.length} </h2>
            <div>
                {
                    data.map(task => <TaskCard key={task.id} data={data} />)
                }
            </div>
        </div>
    );
};

export default TaskPage;