

import { addNewTask } from '@/app/lib/actions';
import { Button, Description, Input, Label, ListBox, Modal , Select, TextField } from '@heroui/react';
import React from 'react';

const NewTask = () => {
    return (
        <div className='w-[400] mx-auto mt-60'>
             <form action={addNewTask} className="flex flex-col gap-4">
                         
                         {/* Task Title */}
                         <TextField className="w-full" name="title" type="text" isRequired>
                           <Label>Task Title</Label>
                           <Input placeholder="e.g., Update landing page UI" />
                         </TextField>
           
                         {/* Task Description */}
                         <TextField className="w-full" name="description" type="text">
                           <Label>Description</Label>
                           <Input placeholder="Brief details about the task" />
                         </TextField>
           
                         {/* Priority Selection */}
                         
                         <Select className="w-full" name="priority" placeholder="Select priority">
                           <Label>Priority Level</Label>
                           <Select.Trigger>
                             <Select.Value />
                             <Select.Indicator />
                           </Select.Trigger>
                           
                           <Select.Popover>
                             <ListBox>
                               <ListBox.Item id="low" textValue="low">
                                 Low Priority
                                 <ListBox.ItemIndicator />
                               </ListBox.Item>
                               <ListBox.Item id="medium" textValue="medium">
                                 Medium Priority
                                 <ListBox.ItemIndicator />
                               </ListBox.Item>
                               <ListBox.Item id="high" textValue="high">
                                 High Priority
                                 <ListBox.ItemIndicator />
                               </ListBox.Item>
                             </ListBox>
                           </Select.Popover>
                           <Description>How urgent is this task?</Description>
                         </Select>
           
                         <Modal.Footer className="mt-4 pt-4 border-t border-muted">
                           <Button slot="close" variant="secondary" type="button">
                             Cancel
                           </Button>
                           
                           <Button slot="close" type="submit">Submit Task</Button>
                         </Modal.Footer>
           
                       </form> 
        </div>
    );
};

export default NewTask;