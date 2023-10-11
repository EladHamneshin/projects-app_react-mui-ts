import './App.css'
import Navbar from './components/NavBar';
import { Box } from '@mui/material';
import Project from './types/Project';
import { Outlet } from 'react-router-dom';

function App() {
  const projects: Project[] = [{name:'p1'}, {name: 'p2'}, {name:'p3'}];

  return (
    <Box sx={{ width: '100%' }}>
      <Navbar projects={projects}/>
      <Outlet/>
    </Box>
  )
}

export default App;
