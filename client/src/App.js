import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SubjectsPage from './pages/AllCourses';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllCourses" element={<SubjectsPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
