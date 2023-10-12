import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProjectTab from "../components/ProjectTab";

const router = createBrowserRouter([
    {
    path: "/",
    element: <App/>,
    children:[
        {
            index: true,
            path: "/",
            element: <h1>Please Select a Project</h1>
        },
        {
            path: "/project/:name",
            element: <ProjectTab/>
        }
    ]
    },
]);

export default router;