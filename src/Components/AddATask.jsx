"use client";

import { CirclePlus } from "@gravity-ui/icons";
import {Button, Description, Input, Label, ListBox, Modal, Surface, TextField , Select} from "@heroui/react";

export function AddATask( { createATask } ) {
  return (
    <Modal>
  <Button variant="secondary">Create New Task</Button>
  <Modal.Backdrop>
    <Modal.Container placement="auto">
      <Modal.Dialog className="sm:max-w-md">
        <Modal.CloseTrigger />
        
        <Modal.Header>
          <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
            <CirclePlus className="size-5" />
          </Modal.Icon>
          <Modal.Heading>Create a Task</Modal.Heading>
          <p className="mt-1.5 text-sm leading-5 text-muted">
            Fill out the details below to add a new task to your board.
          </p>
        </Modal.Header>

        <Modal.Body className="p-6">
          <Surface variant="default">
           
            <form action={createATask} className="flex flex-col gap-4">
              
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
          </Surface>
        </Modal.Body>

      </Modal.Dialog>
    </Modal.Container>
  </Modal.Backdrop>
</Modal>
  );
}