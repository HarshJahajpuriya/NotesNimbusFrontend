import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container sx={{ my: 2 }}>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
          </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
