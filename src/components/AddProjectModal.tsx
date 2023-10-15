import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useAppDispatch } from "../hooks/useAppRedux";
import { addProject } from "../slices/projectSlice";
import { useRef } from "react";

type AddProjectModalProps = {
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const AddProjectModal = (props: AddProjectModalProps) => {
    const {show, setShow} = props;
    const projectName = useRef("");
    const dispatch = useAppDispatch();

    const handleCreateClick = ()=>{
        if(projectName.current === "")
            return

        dispatch(addProject({name: projectName.current}))
        setShow(false);
    }

    const handleCancelClick = ()=>{
        setShow(false);
    }

    return <Modal
                open={show}
                onClose={()=>{
                    setShow(false);
                }}>
                    <Box id="modal-modal" sx={
                        {
                            position: 'absolute',
                            top: '45%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 3,
                          }   
                    }>
                        <Typography  variant="h6" >
                        Create New Project
                        </Typography>
                        <TextField onChange={(event)=> projectName.current = event.target.value}
                            label="Project's Name" variant='standard'  name='name' 
                            sx={{ mt: 2, width: '100%' }}/>
                        <Box sx={{display:'flex', justifyContent:'end', marginTop:5}}>
                            <Button onClick={handleCreateClick} >create</Button>
                            <Button onClick={handleCancelClick} >cancel</Button>
                        </Box>
                    </Box>
                </Modal>
}

export default AddProjectModal;