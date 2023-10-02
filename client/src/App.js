import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubjectsPage from './pages/AllCourses';
import Home from './pages/Home';
import { ClerkProvider,RedirectToSignIn,SignedIn, SignedOut} from "@clerk/clerk-react"


const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AllCourses" element={<SubjectsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

export default App;