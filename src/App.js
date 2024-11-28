import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { Footer } from './components/Footer';
import { Header } from "./components/Header";
import { ApartmentPage } from "./pages/ApartmentPage";
import "./App.css";
import "./index.css";

function App() {
 return (
   <div className="App">
     <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apartment/:id" element={<ApartmentPage />} />
        </Routes>
        <Footer />
     </Router>
   </div>
 );
}

export default App;
