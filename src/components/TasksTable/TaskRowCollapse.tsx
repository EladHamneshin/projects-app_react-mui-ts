import { Box, Collapse, List, ListItem, ListItemText, TableCell, TableRow, Typography } from "@mui/material"
import Instruction from "../../types/Instruction"

type TaskRowCollapseProps = {
    open: boolean,
    instructions: Instruction[]
}

const TaskRowCollapse = (props: TaskRowCollapseProps) => {
    return(
        <TableRow style={{backgroundColor:"#9BA4B010", borderLeft:"solid #9BA4B0 2px"}}>
            <TableCell style={{ padding: 0 }} colSpan={4}>
                <Collapse in={props.open}
                            timeout="auto" 
                            unmountOnExit
                            sx={{ borderBottom:"solid #F0F0F0 3px"}}>
                    <Box marginLeft={3}>
                        <List>
                            <Typography sx={{fontSize:15, fontWeight: 'bold' }}>Description:</Typography> 
                            {props.instructions.map((ins, i)=>{
                                return <ListItem key={i} sx={{paddingBottom:0, paddingTop:0}}>
                                            <ListItemText>
                                                <Typography sx={{fontSize:14}}>
                                                    {ins.description}
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                            })}
                        </List>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
)}

export default TaskRowCollapse;