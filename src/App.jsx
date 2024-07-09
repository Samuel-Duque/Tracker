import React, { useEffect } from "react";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
function App() {
  useEffect(() => {
    document.body.setAttribute("data-theme", "dark");
  }, []);

  return (
    <div>
      <HomeScreen />
    </div>
  );
}

export default App;
