import "./App.css";
import Options from "./component/Options";
import Header from "./component/Header";
import { useState } from "react";
import MainContext from "./component/MainContext";

function App() {
  const [isHovered , setIsHovered] = useState(false);
  const [showInstructions , setShowInstructions] = useState(false);
  const [showAdjustment , setShowAdjustment] = useState(false);
  const [showLogIn , setShowLogIn] = useState(false);
  return (
    <div className=" h-screen bg-gradient-to-r from-[#d6ccc2] to-[#f5ebe0]">
      <MainContext.Provider value={{
        setShowInstructions,
        showInstructions,

        showLogIn,
        setShowLogIn,

        showAdjustment,
        setShowAdjustment
      }}>
          <Header isHovered={isHovered} setIsHovered={setIsHovered}/>
          <div className="max-w-[1180px] m-auto border border-gray-500 mt-5"></div>
          <Options isHovered={isHovered}/>
      </MainContext.Provider>
    </div>
  );
}

export default App;
