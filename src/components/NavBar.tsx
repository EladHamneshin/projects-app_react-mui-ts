import SpaceBetween from "./SpaceBetween";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ProjectsTabs from "./ProjectsTabs";
import { Box } from "@mui/material";
import Project from "../types/Project";

type NavBarProps= {
        projects: Project[]
}

const Navbar = (props: NavBarProps) => {
    return (
    <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <SpaceBetween>
                <ProjectsTabs projects={props.projects}/>
                <AddCircleOutlineIcon/>
            </SpaceBetween>
        </Box>
    </Box>
    )
  
   
  };
  
  export default Navbar;