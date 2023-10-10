import * as React from 'react';
import { useContext } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabValueContext } from '../hooks/TabValueContextProvider';

type TabProps= {
  projects: string[]
}

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
function ProjectsTabs(props: TabProps) {  

  const tabValueContext = useContext(TabValueContext);
  if(!tabValueContext)
    return null;

    const {tabsValue ,setTabsValue} = tabValueContext;

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
      setTabsValue(newValue);
    };
  
    return (
        <Tabs value={tabsValue} onChange={handleChange} aria-label="basic tabs example">
          {props.projects.map((p, i) => {
            return <Tab key={i} label={p} {...a11yProps(i)} />
          })}
        </Tabs>
    );
  }

  export default ProjectsTabs;