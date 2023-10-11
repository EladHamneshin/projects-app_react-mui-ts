import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ProjectContext } from '../contexts/ProjectContextProvider';
import { useContext } from 'react';



function TabPanel() {
  const projectContext = useContext(ProjectContext);
  if(!projectContext)
    return null;

    const {project} = projectContext;
    
  return (
    <div role="tabpanel">
      {
      project &&
      <Box sx={{ p: 3 }}>
        <Typography>{project.name}</Typography>
      </Box>
      }
    </div>
  );
}

export default TabPanel;
