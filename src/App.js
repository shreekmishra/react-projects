import { Route, Routes } from 'react-router-dom';
import './App.scss';
import AppLayout from './components/AppLayout';
import Home from './pages/Home'
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';


function App() {

  return (
      <Routes>
        <Route path='/' Component={AppLayout}>
          <Route index Component={Home} />
          <Route path='projects' >
            <Route index Component={Projects} />
          </Route>
          <Route path='contact' Component={Contact} />
          <Route path='*' Component={PageNotFound} />
        </Route>
      </Routes>
  );
}

export default App;
