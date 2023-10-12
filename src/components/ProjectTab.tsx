import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useAppSelector } from '../hooks/useAppRedux';



function ProjectTab() {
  const selectedProject = useAppSelector((state)=>state.project.project) 

  return (
    <div role="tabpanel">
      {
      selectedProject &&
      <Box sx={{ p: 3 }}>
        <Typography>{selectedProject.name}</Typography>
      </Box>
      }
    </div>
  );
}

export default ProjectTab;
