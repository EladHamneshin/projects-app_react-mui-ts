import Instruction from "../types/Instruction";
import Project from "../types/Project";
import Status from "../types/Status";
import Task from "../types/Task";

function createTask(name: string, dueDate: Date, description: Instruction[], status: Status): Task {
    return {
        name,
        dueDate,
        description,
        status,
    };
}
function createProject(projectName: string): Project {
    const tasks: Task[] = [
        createTask("Plan Project Kickoff Meeting", new Date("2023-10-20"), 
            [
                { description: "Create agenda" },
                { description: "Send invitations" },
                { description: "Prepare presentation" }
            ], 
            "In Progress"),
        createTask("Design Project Logo", new Date("2023-11-15"), 
            [
                { description: "Sketch logo concepts" },
                { description: "Select color scheme" },
                { description: "Review font options" }
            ], 
            "Pending"),
        createTask("Develop Project Website", new Date("2023-12-05"), 
            [
                { description: "Build homepage" },
                { description: "Implement navigation" },
                { description: "Test on multiple browsers" }
            ], 
            "Completed"),
        createTask("Develop Project Landing Page", new Date("2023-12-05"), 
        [
            { description: "Build homepage" },
            { description: "Implement navigation" },
            { description: "Test on multiple browsers" }
        ], 
        "Aborted")
    ];

    return {
        name: projectName,
        tasks,
    };
}

const project1: Project = createProject("Marketing Campaign");
const project2: Project = createProject("Product Launch");
const project3: Project = createProject("Website Redesign");

const projects: Project[] = [project1, project2, project3];

export default projects;