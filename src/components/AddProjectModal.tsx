import { Box, Button, Modal, TextField, Typography } from "@mui/material";

const AddProjectModal = () => {
    return    <Modal
                open={true}
                onClose={()=>{}}>
                    <Box id="modal-modal" sx={
                        {
                            position: 'absolute' as 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            border: '0.5px solid #000',
                            boxShadow: 24,
                            p: 3,
                          }   
                    }>
                        <Typography  variant="h6" >
                        Create New Project
                        </Typography>
                        <TextField
                            label='Project Name' variant='standard'  name='name' 
                            sx={{ mt: 2, width: '100%' }}/>
                        <Box sx={{display:'flex', justifyContent:'end', marginTop: '7px'}}>
                            <Button  >create</Button>
                            <Button >cancel</Button>
                        </Box>
                    </Box>
                </Modal>
}

export default AddProjectModal;