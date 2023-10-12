import Instruction from "./Instruction";
import Status from "./Status";

type Task = {
    name: string,
    endDate: Date,
    description: Instruction[]
    status: Status
}

export default Task;