
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import CustumTableCell from './CustumTableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddTaskTwoToneIcon from '@mui/icons-material/AddTaskTwoTone';
import Task from '../types/Task';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Box, TableCell } from '@mui/material';
import Status from '../types/Status';

type TasksTableProps = {
  tasks?: Task[]
}

function getStatusColor(status: Status){
  switch(status){
    case 'Completed':
      return "#98D8AA";
    case 'Pending':
      return "#F0F0F0";
    case 'In Progress':
      return " #F7D060";
    case 'Aborted':
      return "#FF6D60";
  }
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
              <TableRow>
                <CustumTableCell width={380}>
                  {task.name}
                </CustumTableCell>
                <CustumTableCell bgColor={getStatusColor(task.status)} align="center">{task.status}</CustumTableCell>
                <CustumTableCell align="center">{task.endDate.toLocaleDateString()}</CustumTableCell>
                <CustumTableCell align="center"><EditOutlinedIcon/></CustumTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    
  );
}

export default TasksTable;