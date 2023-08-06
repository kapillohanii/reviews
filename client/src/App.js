import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SubjectsPage from './pages/AllCourses';
import Home from './pages/Home';
import FormStructor from "./pages/login";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllCourses" element={<SubjectsPage />} />
        <Route path="/login" element={<FormStructor />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;