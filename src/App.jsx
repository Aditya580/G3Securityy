import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Connect from "./Components/Connect/Connect";  // Ensure this path is correct
import Header from "./Components/Header/Header";    // Import Header
 <style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
</style> 

function App() {
  return (
    <Router>  {/* ✅ Wrap everything inside BrowserRouter */}
      <Header /> {/* ✅ Header must be inside Router */}
      <Routes> 
        <Route path="/" element={<h1>Home Page</h1>} />  {/* ✅ Example Home Page */}
        <Route path="/connect" element={<Connect />} />  {/* ✅ Correct Route */}
      </Routes>
    </Router>
  );
}

export default App;



