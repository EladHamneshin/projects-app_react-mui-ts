import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TabPanel from "../components/TabPannel";

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
            element: <TabPanel/>
        }
    ]
    },
]);

export default router;