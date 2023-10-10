import Instruction from "./Instruction";
import Status from "./Status";

type Assignment = {
    name: string,
    endDate: Date,
    description: Instruction[]
    status: Status
}

export default Assignment;