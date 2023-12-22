import { useState } from 'react'
import { Button } from "../@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../@/components/ui/dialog";
import { Input } from "../@/components/ui/input";
import { Label } from "../@/components/ui/label";
import { tasksWithOutId } from '../types'
import axios from 'axios';
const AddTask = () => {
    const [taskname, setTaskName] = useState<string>("");
    const [taskdescription, setTaskDescription] = useState<string>("");
    const id = localStorage.getItem('userId');
    const API = import.meta.env.VITE_API;
    const addtask = () => {
        if (!taskname || !taskdescription) {
            alert("Please fill out both name and description.");
            return;
        }

 

        axios
            .post<tasksWithOutId>(`${API}/api/v1/tasks`, 
            {task_name : taskname, task_description : taskdescription, id : id},
                {
                    withCredentials: true,
                })
            .then((response) => {
                console.log(response.data);
                setTaskName("");
                setTaskDescription("");
                window.location.pathname = "/";
            })
            .catch((error) => console.error("Error adding Task:", error));
    };



    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="font-bold p-2 text-lg bg-black text-white border-none shadow-xl"
                    >
                        Add Task
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Task</DialogTitle>
                        <DialogDescription>
                            Enter Details for New task
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                className="col-span-3"
                                value={taskname}
                                onChange={(e) => setTaskName(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-4 boarditems-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input
                                id="description"
                                className="col-span-3"
                                value={taskdescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
                            />
                        </div>
                        <Button type="button" onClick={addtask}>
                            Save changes
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddTask