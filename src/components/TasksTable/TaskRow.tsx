import { IconButton, TableRow } from "@mui/material"
import StyledTableCell from "./StyledTableCell"
import FlexSpaceBetween from "../FlexWrapper/FlexSpaceBetween"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Status from "../../types/Status";
import { Fragment, useState } from "react";
import Task from "../../types/Task";
import TaskRowCollapse from "./TaskRowCollapse";

type TakRowProps = {
    task: Task
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

const TaskRow = (props: TakRowProps)=>{
    const [open, setOpen] = useState(false)
    const {task} = props;

    return (
        <Fragment>
            <TableRow>
                <StyledTableCell style={{borderLeft:"solid #393646 2px"}}>
                    <FlexSpaceBetween>
                    {task.name}
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen((prev)=>!prev)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                    </FlexSpaceBetween>
                </StyledTableCell>
                <StyledTableCell style={{backgroundColor:getStatusColor(task.status)}} align="center">
                    {task.status}
                </StyledTableCell>
                <StyledTableCell align="center">{task.dueDate.toLocaleDateString()}</StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton>
                    <EditOutlinedIcon/>
                  </IconButton>
                </StyledTableCell>
            </TableRow>
            <TaskRowCollapse open={open} instructions={task.description}></TaskRowCollapse>
        </Fragment>
        
    )
}

export default TaskRow;