import './App.css'
import Navbar from './components/NavBar';
import TabPanel from './components/TabPannel';
import { useContext } from 'react';
import { TabValueContext } from './hooks/TabValueContextProvider';
import { Box } from '@mui/material';

function App() {
  const tabValueContext = useContext(TabValueContext);
  
  if(!tabValueContext)
    return null;

  const {tabsValue} = tabValueContext;

  const projects = ['p1', 'p2', 'p3'];


  return (
    <Box sx={{ width: '100%' }}>
      <Navbar projects={projects}></Navbar>
      {projects.map(
        (p, i) => {
          return <TabPanel key={i} value={tabsValue} index={i}>
                  {p}
                </TabPanel>
      })}
    </Box>
  )
}

export default App
