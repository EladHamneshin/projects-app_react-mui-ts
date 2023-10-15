import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import { useAppDispatch } from "../hooks/useAppRedux";
import { addProject } from "../slices/projectSlice";
import { useRef } from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs"


type CreateTaskModalProps = {
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateTaskModal = (props: CreateTaskModalProps) => {
    const { show, setShow } = props;
    const taskName = useRef("");
    const dispatch = useAppDispatch();

    const handleCreateClick = () => {
        if (taskName.current === "")
            return

        dispatch(addProject({ name: taskName.current }))
        setShow(false);
    }

    const handleCancelClick = () => {
        setShow(false);
    }

    return <Modal
        open={show}
        onClose={() => {
            setShow(false);
        }}>
        <Box id="modal-modal" sx={
            {
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 3,
            }
        }>
            <Typography variant="h6" marginBottom={1}>
                Create New Task
            </Typography>
            <TextField onChange={(event) => taskName.current = event.target.value}
                label="Task's Name" variant='standard' name='name'
                sx={{ mt: 2, width: '100%' }} />
            <DatePicker label="Due Date"
                slotProps={{ textField: { variant: 'standard' } }}
                sx={{ mt: 2, width: '100%', marginBottom:2 }}
                defaultValue={dayjs(new Date())}
            />
            <FormControl style={{ display:"flex", width:"30%"}}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age" >
                    <MenuItem value={"In Progress"} style={{backgroundColor:"#F7D060"}}>In Progress</MenuItem>
                    <MenuItem value={"Pending"} style={{backgroundColor:"#F0F0F0"}}>Pending</MenuItem>
                    <MenuItem value={"Completed"} style={{backgroundColor:"#98D8AA"}}>Completed</MenuItem>
                    <MenuItem value={"Aborted"} style={{backgroundColor:"#FF6D60"}}>Aborted</MenuItem>
                </Select>
            </FormControl>
            <Button sx={{marginTop:2}} variant="contained">ADD INSTRUCTION</Button>
            <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: 7 }}>
                <Button onClick={handleCreateClick} >create</Button>
                <Button onClick={handleCancelClick} >cancel</Button>
            </Box>
        </Box>
    </Modal>
}

export default CreateTaskModal;