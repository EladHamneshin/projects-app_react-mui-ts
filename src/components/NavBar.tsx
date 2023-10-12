import FlexSpaceBetween from "./styles/FlexSpaceBetween";
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
        <Box sx={{ borderBottom: 1, borderColor: 'divider', paddingLeft:20, paddingRight:20, backgroundColor:"gray" }}>
            <FlexSpaceBetween>
                <ProjectsTabs projects={props.projects}/>
                <AddCircleOutlineIcon/>
            </FlexSpaceBetween>
        </Box>
    </Box>
    )
  
   
  };
  
  export default Navbar;