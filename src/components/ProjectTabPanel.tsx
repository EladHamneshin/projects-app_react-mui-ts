import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useAppSelector, useAppDispatch } from '../hooks/useAppRedux';
import { setSelected } from '../slices/projectSlice';
import { useLocation } from 'react-router-dom';



function ProjectTabPanel() {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const {projects, selected} = useAppSelector((state)=>state.project) 

  // where user directly browse project path
  if(selected === false){
    const projectNameUnderScore = location.pathname.split('/')[2]
    const projectName = projectNameUnderScore.split('_').join(' ')
    const projectIndex = projects.findIndex((p)=>p.name === projectName);
    dispatch(setSelected(projectIndex))
  }
  
  return (
    <div role="tabpanel">
      {
      selected !== false &&
      <Box sx={{ p: 3 }}>
        <Typography>{projects[selected].name}</Typography>
      </Box>
      }
    </div>
  );
}

export default ProjectTabPanel;
