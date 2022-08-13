import { Routes, Route } from 'react-router-dom';
import Genre from './routes/genre.componet';
import SingleP from './routes/sinleP.componet';
import Nav from './routes/nav/nav.componet';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route path='play' element={<Genre />}>
          <Route path='single' element={<SingleP />}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
