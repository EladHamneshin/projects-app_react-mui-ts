import FlexSpaceBetween from "./FlexWrapper/FlexSpaceBetween";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ProjectsTabs from "./ProjectTabs/ProjectsTabs";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import AddProjectModal from "./AddProjectModal";

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = ()=>{
        setShowModal(true);
    }

    return (
    <Box sx={{ width: '100%' }}>
        <Box sx={{ paddingLeft:20, paddingRight:20, backgroundColor:"#F0F0F0"}}>
            <FlexSpaceBetween>
                <ProjectsTabs/>
                <IconButton onClick={handleClick} sx={{
                    '&.MuiButtonBase-root':{
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
        <AddProjectModal show={showModal} setShow={setShowModal}/>
    </Box>
    )
  
   
  };
  
  export default Navbar;