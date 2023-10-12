import { TableCell } from "@mui/material";
import { styled } from "@mui/system";

const CustumTableCell = styled(TableCell)<{ bgColor?: string  }>( 
    ({...props }) => {
        return{
            backgroundColor: props.bgColor || "#F0F0F0",
            border: "solid white 6px",
        }
    }
);

export default CustumTableCell;