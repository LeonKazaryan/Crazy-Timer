import { Routes, Route } from "react-router-dom";
import { Timer } from "./pages/Timer";
import { Settings } from "./pages/Settings";
import { useState } from "react";
import { Finish } from "./pages/Finish";

function App() {
  const [time, setTime] = useState(10);
  const [name, setName] = useState("");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Settings
            time={time}
            setTime={setTime}
            name={name}
            setName={setName}
          />
        }
      />
      <Route path="/timer" element={<Timer initialTime={time} name={name} />} />
      <Route path="/finish" element={<Finish name={name} />} />
    </Routes>
  );
}

export default App;
