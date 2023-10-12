import * as React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Project from '../types/Project';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/useAppRedux';
import { setProject } from '../slices/projectSlice';

type TabProps= {
  projects: Project[]
}

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
function ProjectsTabs(props: TabProps) {  
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [selected , setSelected] = useState<number | boolean>(false)

  const handleChange = (_: React.SyntheticEvent, newIndex: number) => {
    const currentProject = props.projects[newIndex];
    setSelected(newIndex);
    dispatch(setProject(currentProject));
    navigate(`/project/${currentProject.name}`)
  };

  return (
      <Tabs value={selected}  onChange={handleChange} aria-label="basic tabs example">
        {props.projects.map((p, i) => {
          return <Tab key={i} label={p.name} {...a11yProps(i)} />
        })}
      </Tabs>
  );
  }

  export default ProjectsTabs;