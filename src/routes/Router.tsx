import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TabPanel from "../components/TabPannel";

const router = createBrowserRouter([
    {
    path: "/",
    element: <App/>,
    children:[
        {
            path: "/project/:name",
            element: <TabPanel/>
        }
    ]
    },
]);

export default router;