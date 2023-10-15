
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddTaskTwoToneIcon from '@mui/icons-material/AddTaskTwoTone';
import { Box, IconButton, TableCell } from '@mui/material';
import TaskRow from './TaskRow';
import CreateTaskModal from '../CreateTaskModal';
import { useState } from 'react';
import Project from '../../types/Project';

type TasksTableProps = {
  project: Project
}

function TasksTable(props: TasksTableProps) {
    const {name ,tasks} = props.project;
    const [show, setShow] = useState(false)

    if(!tasks)
      return

  return (
    <>
     <Box sx={{marginTop:5, width:"50%"}}>
      <TableContainer component={Box}>
        <Table size="small">
          <colgroup>
            <col style={{width:'60%'}}/>
            <col style={{width:'15%'}}/>
            <col style={{width:'20%'}}/>
            <col style={{width:'5%'}}/>
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell >Name</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Due Date</TableCell>
              <TableCell align="center">
                <IconButton onClick={()=>setShow((prev)=>!prev)}>
                  <AddTaskTwoToneIcon/>
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, i) => (
              <TaskRow task={task} key={name + task.name + i} ></TaskRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    <CreateTaskModal show={show} setShow={setShow}/>
  </>
   
    
  );
}

export default TasksTable;