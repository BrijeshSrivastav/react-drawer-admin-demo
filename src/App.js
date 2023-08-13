import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import  theme from "./theme";
import Dashboard from "./screen/dashboard/Dashboard";
import MiniDrawer from "./components/MiniDrawer";


function App() {

  const [isSidebar, setIsSidebar] = useState(true);

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <MiniDrawer  />
          <main className="content">
            {/* <Topbar setIsSidebar={setIsSidebar} /> */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
             
            </Routes>
          </main>
        </div>
      </ThemeProvider>
  
  );
}

export default App;
