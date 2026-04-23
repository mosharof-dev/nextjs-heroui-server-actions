import React from 'react';
import getTaskData from '../lib/tasks';
import BookCard from '@/Components/TaskCard';
import { AddATask } from '@/Components/AddATask';
import { createATask } from '../lib/actions';
import Link from 'next/link';
import { Button } from '@heroui/react';



const TaskPage = async() => {
    const data = await getTaskData()
    // console.log(data);
    return (
        <div>
            <h2>Task: {data.length} </h2>
            <AddATask createATask={createATask} />
            <Link href={'/task/new'}>
             <Button>Add Task</Button>
            </Link>
            <div className=' grid grid-cols-4 gap-4 p-12'>
                {
                    data.map(task => <BookCard key={task.id} task={task} />)
                }
            </div>
        </div>
    );
};

export default TaskPage ;
