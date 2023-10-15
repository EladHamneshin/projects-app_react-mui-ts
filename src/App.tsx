import './App.css'
import Navbar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import FlexCenterColumn from './components/FlexWrapper/FlexCenterColumn';

function App() {

  return (
    <FlexCenterColumn sx={{ width: '100%' }}>
      <Navbar/>
      <Outlet/>
    </FlexCenterColumn>
  )
}

export default App;
