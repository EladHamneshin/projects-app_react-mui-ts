import { Box, Collapse, TableCell, TableRow } from "@mui/material"
import Instruction from "../../types/Instruction"

type TaskRowCollapseProps = {
    open: boolean,
    instructions: Instruction[]
}

const TaskRowCollapse = (props: TaskRowCollapseProps) => {
    return(
        <TableRow style={{backgroundColor:"#9BA4B010", borderLeft:"solid #9BA4B0 2px", borderBottom:"solid #F0F0F0 2px"}}>
            <TableCell style={{ padding: 0 }} colSpan={4}>
                <Collapse in={props.open}
                            timeout="auto" 
                            unmountOnExit>
                    <Box>
                        <ul>
                            Description:
                            {props.instructions.map((i)=>{
                                return <li key={i.description}>{i.description}</li>
                            })}
                        </ul>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
)}

export default TaskRowCollapse;