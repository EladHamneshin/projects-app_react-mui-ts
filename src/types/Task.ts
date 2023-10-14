import Instruction from "./Instruction";
import Status from "./Status";

type Task = {
    name: string,
    dueDate: Date,
    description: Instruction[]
    status: Status
}

export default Task;