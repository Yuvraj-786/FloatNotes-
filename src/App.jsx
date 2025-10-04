import React, { useState } from "react";
import Background from "./components/Background";
import Forground from "./components/Forground";


function App() {
  const [showNotes, setShowNotes] = useState(false);
  const toggleCreate = () => setShowNotes((prev) => !prev);

  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Forground  />
     
    </div>
  );
}

export default App;