import Typography from '@mui/material/Typography';
import { useAppSelector, useAppDispatch } from '../../hooks/useAppRedux';
import { setSelected } from '../../slices/projectSlice';
import { useParams } from 'react-router-dom';
import TasksTable from '../TasksTable/TasksTable';
import FlexCenterColumn from '../FlexWrapper/FlexCenterColumn';



function ProjectTabPanel() {
  const {name} = useParams()
  const dispatch = useAppDispatch()
  const {projects, selected} = useAppSelector((state)=>state.project) 

  if(!name)
    return

  // where user directly browse project path
  if(selected === false){
    const projectName = name.split('_').join(' ')
    const projectIndex = projects.findIndex((p)=>p.name === projectName);
    dispatch(setSelected(projectIndex))
  }
  
  return (
    <div role="tabpanel">
      {
      selected !== false &&
      <FlexCenterColumn>
        <Typography variant='h2' marginTop={5}>{projects[selected].name}</Typography>
        <TasksTable tasks={projects[selected].tasks}></TasksTable>
      </FlexCenterColumn>
      }
    </div>
  );
}

export default ProjectTabPanel;
