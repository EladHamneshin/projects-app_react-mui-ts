import FlexSpaceBetween from "./styles/FlexSpaceBetween";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ProjectsTabs from "./ProjectsTabs";
import { Box, IconButton } from "@mui/material";

const Navbar = () => {
    return (
    <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', paddingLeft:20, paddingRight:20, backgroundColor:"gray" }}>
            <FlexSpaceBetween>
                <ProjectsTabs/>
                <IconButton sx={{
                    '&.MuiButtonBase-root':{
                        color: 'black',
                        width: '40px',
                        height: '40px',

                    },
                    '&.MuiButtonBase-root:hover':{
                        transition: '0.5s',
                        opacity: '40%',
                        borderRadius: '50%'
                    }
                }}>
                    <AddCircleOutlineIcon/>
                </IconButton>
            </FlexSpaceBetween>
        </Box>
    </Box>
    )
  
   
  };
  
  export default Navbar;