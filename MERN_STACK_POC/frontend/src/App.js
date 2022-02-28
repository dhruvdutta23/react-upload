
import Header from './container/Header';
import {Route, Routes,Redirect}from 'react-router-dom'
import { PersonalInfo } from './container/PersonalInfo';
import { ProjectInfo } from './container/Projectinfo';

function App() {
  return (
    <div >
    <Header/>
    <Routes>
      {/* <Route path='/' Redirect='/personal'></Route> */}
      <Route path='/'  element={<PersonalInfo/>}/>
      <Route path='project' element={<ProjectInfo/>}/>
    </Routes>
    </div>
  );
}

export default App;
