import './App.css'
import Navbar from './components/NavBar';
import Project from './types/Project';
import { Outlet } from 'react-router-dom';
import FlexCenterColumn from './components/styles/FlexCenterColumn';

function App() {
  const projects: Project[] = [{name:'p1'}, {name: 'p2'}, {name:'p3'}];

  return (
    <FlexCenterColumn sx={{ width: '100%' }}>
      <Navbar projects={projects}/>
      <Outlet/>
    </FlexCenterColumn>
  )
}

export default App;
