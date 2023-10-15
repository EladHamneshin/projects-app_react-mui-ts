import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/useAppRedux';
import { setSelected } from '../../slices/projectSlice';



function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
function ProjectsTabs() {  
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {projects, selected} = useAppSelector((state)=>state.project)

  const handleChange = (_: React.SyntheticEvent, newIndex: number) => {
    const currentProject = projects[newIndex];
    dispatch(setSelected(newIndex));
    navigate(`/project/${currentProject.name.split(' ').join('_')}`)
  };

  return (
      <Tabs value={selected}  onChange={handleChange} aria-label="basic tabs example">
        {projects.map((p, i) => {
          return <Tab key={i} label={p.name} {...a11yProps(i)} />
        })}
      </Tabs>
  );
  }

  export default ProjectsTabs;