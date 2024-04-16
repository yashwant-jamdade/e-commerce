import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Apply the font globally
import "./index.css"; // Create index.css file for global styles

import { Routes, Route } from "react-router-dom";
import BlankLayout from "./layout/blank/BlankLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<BlankLayout />} />
      </Routes>
    </div>
  );
}

export default App;
