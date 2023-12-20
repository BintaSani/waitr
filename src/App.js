
import './App.css';
import DarkScreen from './darkScreen/darkScreen';
import { Routes, Route } from 'react-router-dom';
import LightScreen from './lightScreen/lightScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={DarkScreen}/>  
        <Route path='/light' Component={LightScreen}/>  
      </Routes>
    </div>
  );
}

export default App;
