import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProjectTabPanel from "../components/ProjectTabs/ProjectTabPanel";

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
            element: <ProjectTabPanel/>
        }
    ],
    errorElement: <h1>404 Not Found!</h1>
    },
]);

export default router;