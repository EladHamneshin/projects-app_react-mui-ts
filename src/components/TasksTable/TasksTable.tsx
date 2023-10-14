
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddTaskTwoToneIcon from '@mui/icons-material/AddTaskTwoTone';
import Task from '../../types/Task';
import { Box, TableCell } from '@mui/material';
import TaskRow from './TaskRow';

type TasksTableProps = {
  tasks?: Task[]
}

function TasksTable(props: TasksTableProps) {
    const {tasks} = props;

    if(!tasks)
      return

  return (
    <Box sx={{marginTop:5}}>
      <TableContainer component={Box}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell >Name</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Due Date</TableCell>
              <TableCell align="center"><AddTaskTwoToneIcon/></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TaskRow task={task} key={task.name} ></TaskRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    
  );
}

export default TasksTable;